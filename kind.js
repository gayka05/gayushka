// dishes.js

const dishes = [
    // Soups
    { name: "Сырный суп", price: 450, weight: "450 мл", image: "сырныйсуп.webp", category: "soup", dataDish: "sir", kind: "vege" },
    { name: "Том Ям", price: 450, weight: "450 мл", image: "томям.webp", category: "soup", dataDish: "tom", kind: "fish" },
    { name: "Борщ", price: 550, weight: "550 мл", image: "борщ.webp", category: "soup", dataDish: "borsh", kind: "meat" },
    { name: "Куриный суп", price: 550, weight: "550 мл", image: "куриныйсуп.webp", category: "soup", dataDish: "kuri", kind: "meat" },
    { name: "Грибной суп", price: 550, weight: "550 мл", image: "суп.webp", category: "soup", dataDish: "grib", kind: "vege" },
    { name: "Уха", price: 550, weight: "550 мл", image: "уха.webp", category: "soup", dataDish: "uxa", kind: "fish" },
    // Salads
    { name: "Мясной салат", price: 350, weight: "350 мг", image: "мяснойсалат.webp", category: "salad", dataDish: "oliv", kind: "meat" },
    { name: "Цезарь с курицей", price: 400, weight: "400 мг", image: "цезарькур.webp", category: "salad", dataDish: "zkur", kind: "meat" },
    { name: "Греческий салат", price: 400, weight: "400 мг", image: "греческийсалат.jpg", category: "salad", dataDish: "grech", kind: "vege" },
    { name: "Цезарь с креветками", price: 400, weight: "400 мг", image: "цезарьтуна.webp", category: "salad", dataDish: "zkrev", kind: "fish" },
    { name: "Салат с тунцом", price: 400, weight: "400 мг", image: "салатстунцом.webp", category: "salad", dataDish: "tuno", kind: "fish" },
    { name: "Салат из баклажанов", price: 400, weight: "400 мг", image: "баклажаны.webp", category: "salad", dataDish: "baklan", kind: "vege" },
    // Main dishes
    { name: "Шашлык", price: 550, weight: "550 мг", image: "шашлык.jpg", category: "main", dataDish: "shashlik", kind: "meat" },
    { name: "Стейк", price: 550, weight: "550 мг", image: "steik.jpg", category: "main", dataDish: "steik", kind: "meat" },
    { name: "Голубцы", price: 550, weight: "550 мг", image: "голубцы.jpg", category: "main", dataDish: "golub", kind: "meat" },
    { name: "Карбонара", price: 450, weight: "450 мг", image: "карбонара.webp", category: "main", dataDish: "karbon", kind: "vege" },
    { name: "Курица в кисло-сладком соусе", price: 450, weight: "450 мг", image: "курицакисл.webp", category: "main", dataDish: "kisli", kind: "meat" },
    { name: "Стейк из осетрины", price: 550, weight: "550 мг", image: "осетрина.webp", category: "main", dataDish: "osetrina", kind: "fish" },
    // Drinks
    { name: "Апельсиновый сок", price: 70, weight: "70 мл", image: "апельсин.jpg", category: "drink", dataDish: "apelsin", kind: "cold" },
    { name: "Яблочный сок", price: 180, weight: "180 мл", image: "яблоко.jpg", category: "drink", dataDish: "apple", kind: "cold" },
    { name: "Гранатовый сок", price: 180, weight: "180 мл", image: "гранат.jpg", category: "drink", dataDish: "grand", kind: "cold" },
    { name: "Клубничный милкшейк", price: 450, weight: "450 мл", image: "милкшейк.webp", category: "drink", dataDish: "strawb", kind: "cold" },
    { name: "Чай с малиной", price: 450, weight: "450 мл", image: "малиновыйчай.webp", category: "drink", dataDish: "tea", kind: "hot" },
    { name: "Латте", price: 450, weight: "450 мл", image: "латте.webp", category: "drink", dataDish: "latte", kind: "hot" },
    // Desserts
    { name: "Панчо", price: 450, weight: "450 мл", image: "панчо.webp", category: "dessert", dataDish: "pancho", kind: "big" },
    { name: "Медовик", price: 450, weight: "450 мл", image: "медовик.jpg", category: "dessert", dataDish: "med", kind: "medium" },
    { name: "Чизкейк с брауни и карамелью", price: 450, weight: "450 мл", image: "чизкейк.webp", category: "dessert", dataDish: "chiz", kind: "medium" },
    { name: "Шоколадный кекс", price: 450, weight: "450 мл", image: "кекс.webp", category: "dessert", dataDish: "keks", kind: "small" },
    { name: "Фисташковый торт", price: 450, weight: "450 мл", image: "фисташка.webp", category: "dessert", dataDish: "fistash", kind: "big" },
    { name: "Банановый мусс с кармелью", price: 450, weight: "450 мл", image: "банан.jpg", category: "dessert", dataDish: "sirnik", kind: "small" },
];




// script.js
let currentFilter = null; // Track the current filter

function displayDishes() {
    const categories = {};
    const uniqueKinds = {};

    // Sort dishes alphabetically within each category
    dishes.sort((a, b) => a.name.localeCompare(b.name));

    // Group dishes by category and collect unique kinds
    dishes.forEach(dish => {
        if (!categories[dish.category]) {
            categories[dish.category] = [];
        }
        categories[dish.category].push(dish);
        
        if (!uniqueKinds[dish.category]) {
            uniqueKinds[dish.category] = new Set();
        }
        uniqueKinds[dish.category].add(dish.kind);
    });

    // Create HTML for each category with filter buttons
    for (const [category, items] of Object.entries(categories)) {
        const section = document.createElement('section');
        const header = document.createElement('h2');

        // Set category titles in Russian
        const categoryTitles = {
            soups: 'Супы',
            salads: 'Салаты',
            mains: 'Основные блюда',
            desserts: 'Десерты',
            drinks: 'Напитки',
            combos: 'Комбо'
        };
        header.textContent = categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1);

        // header.textContent = category === 'soup' ? 'Супы' :
        // category === 'salad' ? 'Салаты' :
        // category === 'main' ? 'Основные блюда' :
        // category === 'drink' ? 'Напитки' :
        // category === 'dessert' ? 'Десерты' : '';

        section.appendChild(header);

        // Create filter buttons for the current category
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-buttons';

        uniqueKinds[category].forEach(kind => {
            // Set filter button texts in Russian
            const kindTitles = {
                meat: 'Мясные',
                fish: 'Рыбные',
                vege: 'Вегетарианские',
                hot: 'Горячие',
                cold: 'Холодные',
                big: 'Большие',
                small: 'Маленькие',
                medium: 'Средние'
            };
            const buttonText = kindTitles[kind] || kind.charAt(0).toUpperCase() + kind.slice(1);
            const kindButton = createFilterButton(buttonText, kind, category);
            kindButton.className = 'filter';
            filterContainer.appendChild(kindButton);
        });

        section.appendChild(filterContainer);

        const grid = document.createElement('div');
        grid.className = "dish-grid";

        items.forEach(item => {
            const dishDiv = document.createElement('div');
            dishDiv.className = "dish";
            dishDiv.setAttribute("data-dish", item.dataDish);
            dishDiv.setAttribute("data-kind", item.kind); // Store kind in the dish element
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            
            const price = document.createElement('p');
            price.className = "price";
            price.textContent = `${item.price} ₽`;
            
            const dishName = document.createElement('p');
            dishName.className = "dish-name";
            dishName.textContent = item.name;

            const weight = document.createElement('p');
            weight.className = "dish-weight";
            weight.textContent = item.weight;

            const button = document.createElement('button');
            button.className = "add-to-cart";
            button.textContent = "Добавить";
            button.onclick = () => addToOrder(item);
            
            // Prevent button style from changing on filter
            button.style.transition = 'none'; // Disable transitions if needed

            dishDiv.appendChild(img);
            dishDiv.appendChild(price);
            dishDiv.appendChild(dishName);
            dishDiv.appendChild(weight);
            dishDiv.appendChild(button);
            grid.appendChild(dishDiv);
        });

        section.appendChild(grid);
        document.body.appendChild(section);
    }
}

function createFilterButton(text, kind, category) {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.textContent = text;
    button.setAttribute('data-kind', kind);
    button.onclick = () => handleFilterClick(kind, category);
    return button;
}

function handleFilterClick(kind, category) {
    if (currentFilter === kind) {
        // If the same filter is clicked again, show all dishes in that category
        currentFilter = null;
        showAllDishes(category);
    } else {
        currentFilter = kind;
        filterDishes(category, kind);
    }
}

function filterDishes(category, kind) {
    const categorySection = Array.from(document.querySelectorAll('section'))
        .find(section => section.querySelector('h2').textContent.toLowerCase() === category);

    const allDishes = categorySection.querySelectorAll('.dish'); // Get dishes only from the specific category

    allDishes.forEach(dish => {
        const dishKind = dish.getAttribute('data-kind'); // Get the kind from the dish element

        if (dishKind === kind) {
            dish.style.display = 'block'; // Show matching dishes
        } else {
            dish.style.display = 'none'; // Hide non-matching dishes
        }
    });
}

function showAllDishes(category) {
    const categorySection = Array.from(document.querySelectorAll('section'))
        .find(section => section.querySelector('h2').textContent.toLowerCase() === category);

    const allDishes = categorySection.querySelectorAll('.dish');
    allDishes.forEach(dish => {
        dish.style.display = 'block'; // Show all dishes in the category
    });
}

function addToOrder(item) {
    const orderContainer = document.getElementById("order");
    const dishCategory = item.category + "s"; // e.g., "soups"
    const categoryDiv = document.getElementById(dishCategory);
    
    // Clear existing message if there is one
    const existingMessage = categoryDiv.querySelector("p");
    if (existingMessage) {
        existingMessage.remove();
    }

    const dishDiv = document.createElement('div');
    dishDiv.textContent = `${item.name} - ${item.price} ₽`;
    categoryDiv.appendChild(dishDiv);
    
    updateTotalPrice();
}

// Initialize the dish display
displayDishes();

// Giỏ hàng
const cart = [];
let totalPrice = 0;

// Hàm thêm món vào giỏ hàng
function addToCart(name, price) {
    document.getElementById('order').style.display = 'block';
    document.getElementById('no-dishes').style.display = 'none';
    cart.push({ name: name, price: price });
    totalPrice += price;
    updateCart();
}

// Cập nhật giỏ hàng hiển thị
function updateCart() {
    // Cập nhật tổng tiền
    document.getElementById('total-price').textContent = `${totalPrice} ₽`;
}

// Tìm tất cả các nút "Добавить" và thêm sự kiện cho chúng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Lấy thông tin tên món và giá từ các phần tử tương ứng
        const dishName = button.previousElementSibling.previousElementSibling.textContent;
        const dishPrice = parseInt(button.previousElementSibling.textContent.replace(' ₽', ''));

        // Gọi hàm thêm vào giỏ hàng
        addToCart(dishName, dishPrice);
    });
});

// Giữ màu khi nút được bấm
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                filters.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});