function fibb(n) {
    if (n < 0 || n > 1000) {
        throw new Error("n должно быть целым неотрицательным числом и не превышать 1000");
    }
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0; // F(0)
    let b = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        let c = a + b; // F(i) = F(i-1) + F(i-2)
        a = b; // Сдвигаем значения
        b = c;
    }

    return b; // Возвращаем F(n)
}

// Примеры использования
console.log(fibb(15)); 
console.log(fibb(28)); 
console.log(fibb(52)); 
//Проверка входных данных: 
//Функция сначала проверяет, что n является целым неотрицательным числом и не превышает 1000.
//Базовые случаи: Если n равно 0 или 1, функция сразу возвращает соответствующее значение.
//Итеративный расчет: Используется цикл для вычисления последовательности Фибоначчи от 
//второго до n-го числа. Переменные a и b хранят два последних числа последовательности.
//Возврат результата: После завершения цикла функция возвращает n-е число Фибоначчи.
