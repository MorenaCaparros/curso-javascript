// Ejemplo 1
// const asyncOperation = new Promise((resolve) => resolve());
// //aca lo que se da es que se va a ver primero a juan despues a pedro y despues a amrio, porque se sale del flujo sincronico de javascript
// //entonces primero lee lo que esta en el call despues entra lo otro que es mario que es la promesa resuelta
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//Ejemplo 2 misma explicacion que el anterior va a mostrar amario ultimo porque tiene que resolverse la promesa antes
// //el fetch una vez que eso pasa ahi aparece mario
// const asyncOperation = fetch("https://jsonplaceholder.typicode.com/todos/1");
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//Ejemplo 3
// //Ejemplo 3
// async function fetchSomething() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Mario');
//       resolve();
//     }, 10);
//   });
//   console.log('Juan');
// }

// fetchSomething();

// console.log('Pedro');

//en consola aparece primero pedro, despues mario y despues juan (porque lo qeu se le dice al codigo es, bueno una vez que hayas resuelto la promesa de mario ejecuta la de juan)
//
//Ejemplo 4
// setTimeout(() => console.log('Mario'), 15);

// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(), 10);
// });

// promise.then(() => console.log('Juan')); // esto lo que hace es que por mas que yo uso el .then se va a ejecutrar igual
// //entonces si mario tiene plazo mayor va a aparecer despues.
// //en este caso elige al SetTimout antes que a la promesa, poriqeu la promesa a su vez tiene un setTimeout, entonces compara ambos setimout
// // pero se deberioa dar que elija primero a la promesa antes que al setTimoput
// //en el ccaso de que tuvieran mismos tiempos
// console.log('Pedro');
