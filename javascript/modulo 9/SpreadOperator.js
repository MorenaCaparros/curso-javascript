//SPREAD OPERATOR SE LO PRESENTA CON (...)

const name1 = ['More', 'Santi', 'Goofy'];
const name2 = ['Juan Carlos', 'Antonio', 'Raul'];

const person1 = {
  firstname: 'Juan',
  job: 'Arquitecto',
  city: 'Mar del Plata',
};

//Para que sirve en arrays

//1) Concatenar arrays (concat)

// const mergedArray = [...name1, ...name2]

// console.log(mergedArray)
// //trae (6) ['More', 'Santi', 'Goofy', 'Juan Carlos', 'Antonio', 'Raul']

// //2) Copia de Array (las copias sirven si se quiere trabajar por ejemplo sobre un determinado array en este caso pero no lo quiero modificar)

// const copiedArray = [...name1]

// name1.push("Marcelo")
// //agregue marcelo a name1 pero copiedArray es un array distinto entonces no se le agrego Marcelo

// console.log(name1, copiedArray)
// //(3) ['More', 'Santi', 'Goofy', 'Marcelo']
// //(3) ['More', 'Santi', 'Goofy']

//lo mejor es siempre trabajar sobre copias, no cambiar la fuente de los datos de manera directa
//porel princpio de la inmutabilidad de los datos

//3) Obtener objetos del Array

//sin spread operator
// const [user1, user2, user3] = name1;

// const groupedusers = [user2, user3];

const [user1, ...groupedusers] = name1;

console.log(user1);
console.log(groupedusers);
console.log(name1);

// //en Funciones
// const logValues = (value1, value2, value3) => {
//   const values = [value1, value2, value3];
//   value.forEach((value) => console.log(value1, value2, value3));
// };

// //para hacer esto con Spreadoperator
// const logValues = (...args) => {
//   args.forEach((value) => console.log(value));
// };

// //lo uqe hace es que pones eso y no importa si se modifica el logValues en este caso
// //ahora si se pone value1, ...args cuando yo llamo necesito poner value1 tmb porque esta esperando esa variable

// logValues('Hola', 'Chau', 'Como estas?');

//En objetos

const copiedPerson = { ...person1 };

copiedPerson.city = 'Rosario';

console.log(copiedPerson); //{firstname: 'Juan', job: 'Arquitecto', city: 'Rosario'}
console.log(person1); //{firstname: 'Juan', job: 'Arquitecto', city: 'Mar del Plata'}

//Mergear objetos (vs object.assign())

const updatedData = {
  city: 'Rosario',
  age: 30,
};
const mergedObject = { ...person1, ...updatedData };

// const mergedObject = {...person1, city: "Mendoza"}
