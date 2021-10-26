//javascript esun lenguaje sincronico no asincronico por eso hay que ver como funciona
// console.log("1");
// for (let index = 0; index < 100; index++) {
//   console.log(index);
// }
// console.log("despues del for");

//se ven en ese orden

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la pava");
// for (let time = 120; time >= 0; time--) {
//   console.log(time);

//   if (time === 0) console.log("La pava está lista");
// }
// console.log("Preparo el mate");
// console.log("Me siento a estudiar"); //las tareas se ejecutan en orden

//para poder haceralgo entre que la pava esta lista y"preparo el mate" voy a usar
//setTimeout () esto lo que hace es dejarme hacer otras cosas hasta tanto no se ucmpla el tiempo.
//tiene dos parametros, el primero es una funcion y el segundo es el tiempo

console.log("Me despierto");
console.log("Me lavo la cara");
console.log("Pongo la pava");

setTimeout(() => /*esta es la funcion*/ {
  console.log("La pava esta lista");
}, 5000);

console.log("Me voy a bañar");
