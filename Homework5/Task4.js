/*
Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. 
Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, 
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

*/


const productsTask4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

// Задание 1.
const result = productsTask4.filter(
    (product) => "photos" in product && product.photos.length > 0
);

console.log(result);

// Задание 2.
productsTask4.sort((product1, product2) => {
    return product1.price - product2.price;
});

console.log(productsTask4);

