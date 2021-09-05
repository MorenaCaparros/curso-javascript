const miArray = [
  "Antonella",
  "Bruno",
  "Candela",
  "Dalma",
  "Enrique",
  "Fatima",
  "Gran",
];

const numbers = [10, 20, 30, 40];

const orderedArray = miArray.sort(); //Esto es para ordenar por orden alfabetico puede hacer mas cosas
//ver array en developer mozilla para profundizar

console.log(orderedArray.reverse()); //lo que hace es dar vuelta el orden

//sin reduce

let total = 0;

numbers.forEach((number) => (total += number)); // lo que hizo aca es sumar que itere y vaya sumando
//cada uno de los valores adentro del Array

//Con reduce: el valorActual es cada uno de los valores adentro del Array, y el acumulador es cada una de las iteraciones
//la x es el valor incial que yo quiero darle al acumulador

const total = numbers.reduce((acumulador, valorActual) => {}, x);

const total = numbers.reduce((acumulador, valorActual) => {
  console.log("Acumulador", acumulador);
  console.log("Valor Actual", valorActual);
  console.log("Aca termina la iteracion");

  return acumulador + valorActual; //es necesario decirle qeu quiero qeu retorne, porqeu sino
  //puede salir  undefined si no le digo nada, y ademas no se va a sumar nada
}, 0);

console.log(total);

//Esto es lo que devolvio esta funcion:
//Acumulador 0
// Valor Actual 10
// Aca termina la iteracion
// Acumulador 10
// Valor Actual 20
// Aca termina la iteracion
// Acumulador 30
// Valor Actual 30
// Aca termina la iteracion
// Acumulador 60
// Valor Actual 40
// Aca termina la iteracion
// 100

//eso de arriba es la explicacion mas sencillo seria:

const total = numbers.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);
console.log(total);
