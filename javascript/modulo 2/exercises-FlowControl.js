/* 1) Triangulo de #. Para este ejercicio, construir un programa que una 
vez concluido nos permita ver en consola un triangulo formado con #, 
de la siguiente manera:

#
##
###
####
#####

(PISTA: recuerden que yo puedo agarrar una variable, tomar su valor
  miVariable = miVariable + "algoMas")
 */

// let triangle = "#";
// for (let i = 1; i <= 5; i++) {
//   console.log(triangle);
//   triangle += "#";
// }

/* 2) Numeros pares e impares. Hacer un programa que itere por los 
  numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y nos diga si es par o impar

Ejemplo:

0 es par
1 es impar
2 es par
...
*/
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} es par`);
//   } else if (i % 2 === 1) {
//     console.log(`${i} es impar`);
//   }
// }

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. 
Por cada  iteracion tiene que mostrar por consola lo sig:

1- Si el numero es multiplo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero


*/
// for (let i = 1; i <= 15; i++) {
// if (i % 15 === 0) {
//   console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//   console.log(`Fizz`);
// } else if (i % 5 === 0) {
//   console.log(`Buzz`);
// } else {
//   console.log(i);
// }
// }

//OTRA MANERA DE HACERLO
// let text = "";

// for (let i = 1; i <= 15; i++) {
//   text = "";
//   if (i % 3 === 0) {
//     text += "Fizz";
//   }

//   if (i % 5 === 0) {
//     text += "Buzz";
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//     text = i;
//   }
//   console.log(text);
// }

// Con While

let i = 1;
while (i <= 15) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
  i++;
}
