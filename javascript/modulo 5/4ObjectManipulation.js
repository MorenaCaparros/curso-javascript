//formas para manipular un  objeto
const person = {
  firstName: "Morena",
  city: "Mar del Plata",
  job: "Lawyer",
};

//Acceder a un elemento

// console.log(person.firstName);

// //Modificar un elemento

// person.city = "Cordoba";
// console.log(person.city);

//Object.key() permite acceder a las Keys
// const keys = Object.keys(person);
// //para poder iterar se puede utilizar el forEach creando un array asi se crea la variable de arriba
// //no se puede iterar con forEach con los objetos

// // keys.forEach((key) => console.log(person[key]));
// // //va a dar: Morena
// // // Mar del Plata
// // // Lawyer

// //Tambien se puede usar el
// //For In
// for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
//     /*esto va a devolver lo mismo que en el forEach pero si en vez de key se pone "lala" no va a devovler nada*/
//     console.log(person[key]);
//   }
// }

// //Otra manera de manipular el objeto es Object.values ()
// //Object.values () nos permite acceder al valor del objeto

// const value = Object.values(person);
// console.log(value); //sale (3) ["Morena", "Mar del Plata", "Lawyer"]

//Object.assign() agrega propiedades, si no existem, y si existen la va a pisar (cambiar)

// const Lawyer = {
//   skills: "Orality",
//   job: "Student",
// };
// Object.assign(person, Lawyer); //primero le digo a que objeto lo quiero asignar "person"
// // y lo segundo es que le quiero asignar "Lawyer"

// //otra forma de hacer lo mismo es con:

// const modifiedPerson = { ...person, ...Lawyer }; //lo voy a ver mas adelante

// console.log(person); //{firstName: "Morena", city: "Mar del Plata", job: "Student", skills: "Orality"}
// console.log(modifiedPerson);

//Object.entries() nos devuelve una matriz con una estructura de key value

const entries = Object.entries(person);
console.log(entries);

//nos da: (como son Arrays podemos iterary modificar y hacer cosas para eso sirve este entries)
//(3) [Array(2), Array(2), Array(2)]
//0: (2) ["firstName", "Morena"]
//1: (2) ["city", "Mar del Plata"]
//2: (2) ["job", "Lawyer"]
//length: 3
//[[Prototype]]: Array(0)
