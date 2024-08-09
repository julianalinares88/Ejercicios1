const students = [
    {
        name: "Juan",
        calificacion: 3,
    },
    {
        name: "Camila",
        grade: 4,
    },
    {
        nombre: "Jose",
        calificacion: 5,
    },
    {
        nombre: "Maria",
        calificacion: 2,
    },
    {
        nombre: "Ana",
        calificacion: 3,
    }
];

const FindStudent = (array, name) => {
    let studentFound = null;

    array.forEach(element => {
        if (element.name === name) {
            studentFound = element; // Asigna el objeto encontrado
        }
    });

    return studentFound; // Devuelve el objeto encontrado o null si no se encontró
};

console.log(FindStudent(students, "Camila")); // Debería devolver el objeto de Camila
console.log(FindStudent(students, "Pedro")); // Debería devolver null
