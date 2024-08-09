 const people = [
     {
         Name: "Esteban",
         Age: 12,
     },
     {
         Name: "Maria",
         Age: 24,
    },
    {
         Name: "Julieta",
         Age: 46,
     },
    {
         Name: "Samuel",
        Age: 10,
     },
    {
         Name: "Camila",
         Age: 19,
     }
 ];

 const addFun = (people) => {
    // le paso mi arreglo a la funcion
     let addtotal = 0
     people.forEach(person => addtotal = addtotal += person.Age)
        console.log(addtotal)

}

 addFun(people)




 


