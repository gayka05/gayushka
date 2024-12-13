let level = 'primary'; // Устанавливаем начальный уровень игры на 'primary'
let correctCount = 0; // Счетчик правильных ответов
let incorrectCount = 0; // Счетчик неправильных ответов
let questionsAsked = []; // Массив для хранения заданных вопросов
const totalQuestionsPerLevel = 10; // Количество вопросов на каждом уровне
let timeElapsed = 0; // Переменная для отслеживания времени, прошедшего с начала игры
let timer; // Переменная для хранения таймера
let currentQuestionAnswer; // Переменная для хранения правильного ответа на текущий вопрос

const levels = { // Объект, содержащий настройки для каждого уровня
    primary: { operator: ['+', '-', '*'], maxNum: 10 }, // Уровень 'primary' с операциями и максимальным числом
    average: { operator: ['>', '<'], maxNum: 20 }, // Уровень 'average' с операциями сравнения
    advanced: { operator: ['+', '*'], maxNum: 5 } // Уровень 'advanced' с операциями в двоичной системе
};

function startGame() { // Функция для начала игры
    correctCount = 0; // Сбрасываем счетчик правильных ответов
    incorrectCount = 0; // Сбрасываем счетчик неправильных ответов
    questionsAsked = []; // Очищаем массив заданных вопросов
    timeElapsed = 0; // Сбрасываем время
    document.getElementById('correct-count').innerText = correctCount; // Обновляем отображение правильных ответов на экране
    document.getElementById('incorrect-count').innerText = incorrectCount; // Обновляем отображение неправильных ответов на экране

    timer = setInterval(() => { // Запускаем таймер, который обновляет время каждую секунду
        timeElapsed++;
        document.getElementById('time').innerText = `Time left: ${timeElapsed}`; // Обновляем отображение времени на экране
    }, 1000);

    askQuestion(); // Задаем первый вопрос
}

function askQuestion() { // Функция для задания вопроса
    if (questionsAsked.length >= totalQuestionsPerLevel) { // Проверяем, если задано максимальное количество вопросов
        checkLevelUp(); // Проверяем, нужно ли переходить на следующий уровень
        return; // Выходим из функции, если вопросы закончились
    }

    const question = generateQuestion(); // Генерируем новый вопрос
    currentQuestionAnswer = question.answer; // Сохраняем правильный ответ на текущий вопрос
    document.getElementById('question').innerText = question.text; // Отображаем текст вопроса на экране
}

function generateQuestion() { // Функция для генерации вопроса
    let operators = levels[level].operator; // Получаем доступные операторы для текущего уровня

    let num1 = Math.floor(Math.random() * levels[level].maxNum); // Генерируем первое случайное число в пределах maxNum
    let num2 = Math.floor(Math.random() * levels[level].maxNum); // Генерируем второе случайное число в пределах maxNum

    let operatorIndex = Math.floor(Math.random() * operators.length); // Выбираем случайный оператор из доступных
    let operator = operators[operatorIndex]; // Получаем выбранный оператор

    let questionText, correctAnswer; // Объявляем переменные для текста вопроса и правильного ответа

    if (level === 'primary') { // Если уровень 'primary'
        if (operator === '+') {
            questionText = `${num1} + ${num2}`; // Формируем текст вопроса для сложения
            correctAnswer = num1 + num2; // Вычисляем правильный ответ для сложения
        } else if (operator === '-') {
            questionText = `${num1} - ${num2}`; // Формируем текст вопроса для вычитания
            correctAnswer = num1 - num2; // Вычисляем правильный ответ для вычитания
        } else if (operator === '*') {
            questionText = `${num1} * ${num2}`; // Формируем текст вопроса для умножения
            correctAnswer = num1 * num2; // Вычисляем правильный ответ для умножения
        }
    } else if (level === 'average') { // Если уровень 'average'
        if (operator === '>') {
            questionText = `${num1} > ${num2}`; // Формируем текст вопроса для сравнения больше чем
            correctAnswer = (num1 > num2) ? 1 : 0; // Правильный ответ - true как 1, false как 0 
        } else if (operator === '<') {
            questionText = `${num1} < ${num2}`; // Формируем текст вопроса для сравнения меньше чем
            correctAnswer = (num1 < num2) ? 1 : 0; 
        }
    } else if (level === 'advanced') { // Если уровень 'advanced'
        let binaryNum1 = num1.toString(2); // Преобразуем первое число в двоичную систему счисления
        let binaryNum2 = num2.toString(2); // Преобразуем второе число в двоичную систему счисления
        
        if (operator === '+') {
            questionText = `${binaryNum1} + ${binaryNum2} (в двоичном виде)`; 
            correctAnswer = parseInt(binaryNum1, 2) + parseInt(binaryNum2, 2); 
        } else if (operator === '*') {
            questionText = `${binaryNum1} * ${binaryNum2} (в двоичном виде)`; 
            correctAnswer = parseInt(binaryNum1, 2) * parseInt(binaryNum2, 2); 
        }
    }

    questionsAsked.push(questionText); // Добавляем сформулированный вопрос в массив заданных вопросов

    return { text: questionText, answer: correctAnswer }; // Возвращаем объект с текстом вопроса и правильным ответом
}

document.getElementById('submit').addEventListener('click', () => { 
    const userAnswer = document.getElementById('answer').value.trim(); 

    if (userAnswer === '') return; 

    if ((userAnswer === 'undefined' && currentQuestionAnswer === 'undefined') || parseInt(userAnswer) === currentQuestionAnswer) { 
        correctCount++; 
        document.getElementById('result').innerHTML =
            "CORRECT! 🎉❤️✨"; 

        setTimeout(() => { 
            document.getElementById('result').innerHTML = ''; 
            askQuestion(); 
        }, 2000);
        
        updateScoreboard(); 

    } else {
        incorrectCount++; 
        document.getElementById('result').innerHTML =
            "Try again! 😢"; 

        setTimeout(() => { 
            document.getElementById('result').innerHTML = ''; 
            askQuestion(); 
        }, 2000);
        
        if (incorrectCount >= totalQuestionsPerLevel) endGame(); 
        
    }
});

function updateScoreboard() { 
    document.getElementById('correct-count').innerText = correctCount; 
    document.getElementById('incorrect-count').innerText = incorrectCount; 
}

function checkLevelUp() { 
   const totalCorrectAnswersNeededForLevelUp = Math.ceil(totalQuestionsPerLevel * 0.8); 

   if (correctCount >= totalCorrectAnswersNeededForLevelUp) {
       if (level === 'primary') level = 'average'; 
       else if (level === 'average') level = 'advanced'; 
       else endGame(); 

       questionsAsked.length = 0;
       askQuestion(); 
       document.getElementById('level').innerText = `Level: ${level}`; 
   } else {
       endGame(); 
   }
}

function endGame() { 
   clearInterval(timer); 
   alert(`Игра окончена! Правильные ответы: ${correctCount}, Неправильные ответы: ${incorrectCount}`); 
   document.getElementById('restart').style.display = "block"; 
}

document.getElementById('restart').addEventListener('click', () => { 
   level = 'primary'; 
   document.getElementById('level').innerText = `Level: ${level}`; 
   startGame(); 
});

// Запуск игры при загрузке страницы
startGame();