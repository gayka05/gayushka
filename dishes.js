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