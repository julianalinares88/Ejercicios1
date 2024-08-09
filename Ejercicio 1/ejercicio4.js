const products = [
    {
        name: "Laptp",
        price: 120
    },
    {
        name: "Cellphone",
        price: 24,
    },
    {
        name: "Mouse",
        price: 86,
    },
    {
        name: "Keyboard",
        price: 10,
    },
    {
        name: "Tablet",
        price: 19,
    }
];

const sortProducts = (array) => {
    const newArrayProducts = array.sort((a, b) => a.price - b.price);

    return newArrayProducts;
    
};
console.log(sortProducts(products));