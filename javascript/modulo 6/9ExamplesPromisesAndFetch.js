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
setTimeout(() => console.log('Mario'), 15);

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 10);
});

promise.then(() => console.log('Juan')); // esto lo que hace es que por mas que yo uso el .then se va a ejecutrar igual
//entonces si mario tiene plazo mayor va a aparecer despues.
//en este caso elige al SetTimout antes que a la promesa, poriqeu la promesa a su vez tiene un setTimeout, entonces compara ambos setimout
// pero se deberioa dar que elija primero a la promesa antes que al setTimoput
//en el ccaso de que tuvieran mismos tiempos
console.log('Pedro');
