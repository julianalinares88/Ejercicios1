const products = [
    {
        Name: "Laptp",
        Price: 120
    },
    {
        Name: "Cellphone",
        Price: 24,
    },
    {
        Name: "Mouse",
        Price: 86,
    },
    {
        Name: "Keyboard",
        Price: 10,
    },
    {
        Name: "Tablet",
        Price: 19,
    }
];

const filterProducts = (array)=> {
    let newArray =[]

    array.forEach(element => {
        if(element.Price > 50) {
            newArray.push(element)
        }
        
    });

    return newArray

};

console.log(filterProducts(products));

// const addFun = (products) => {
//  let Filtrados =[]

//     products.forEach(product => 
//         if(products.Price > 50) {
//             Filtrados.push(products)
//         }
//     )
//     console.log(Filtrados);
// }
// addFun(products)
// console.log(products)

