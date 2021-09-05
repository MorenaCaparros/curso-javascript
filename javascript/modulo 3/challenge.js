/*Ejercicios
1) Crear un programa que pida al usuario que ingrese un numero y le
devuelva un mensjae indicando si el numero es positivo, negativo o si es
0 */

// const userNumber = +prompt("Ingresa un numero");

// function comparison(number) {
//   if (number === 0) {
//     return "El numero es 0";
//   } else if (number >= 1) {
//     return "El numero es positivo";
//   } else if (!userNumber) {
//     return "El valor ingresado no es un numero";
//   } else {
//     return "El numero es negativo";
//   }
// }

// // //VERSION ARROW FUNCTION
// // const comparison2 = (number) => {
// //   if (number === 0) {
// //     return "El numero es 0";
// //   } else if (number >= 1) {
// //     return "El numero es positivo";
// //   } else {
// //     return "El numero es negativo";
// //   }
// // };

// alert(comparison(userNumber));
// console.log(comparison(userNumber));

/*  2)Crear un programa que pida un numero al usuario y le devuelva un mensaje
diciendo si el numero es primo o no.
Aclaracion: numeros primos son lso quetiene 4 divisores, 2 positivos y 2 negativos
el 1 no es numero primo
*/

// const userNumber = +prompt("Ingresa un numero");

// const isPrimeNumber = (number) => {
//   if (number < 2) return false;

//   for (let i = 2; i < Math.abs(number); i++) {
//     if (Math.abs(number) % i === 0 && i !== 1) {
//       return false;
//     }
//   }

//   return true;
// };

// // //Ej con operador ternario
// // const result = isPrimeNumber(userNumber);

// // alert(result ? "Es Primo" : "No es primo");

// if (isPrimeNumber(!userNumber && userNumber !== 0)) {
//   alert(`El valor ingresado no es un numero`);
// } else if (isPrimeNumber(userNumber)) {
//   alert(`${userNumber} es primo`);
// } else {
//   alert(`${userNumber} no es primo`);
// }

/* 3) Crear un programa que convierta la temperatura de grados Celsius a 
Farenheit y visceversa. El usuario deberia ingresar la temperatura y a qeu 
unidad la quiere convertir */

// const userTemperature = prompt("Ingresa el numero de la temperatura:");
// const userDegrees = prompt(
//   "Ingresa el grado de la temperatura a la que quiere convertir, `F` o `C`:"
// );

// const convertTemperature = (temperature, degree) => {
//   let returnValue = 0;

//   if (!isNaN(temperature)) {
//     if (degree.toUpperCase() === "F") {
//       returnValue = +temperature * (9 / 5) + 32;
//       return `La temperatura es ${returnValue} °${degree.toUpperCase()}`;
//     } else if (degree.toUpperCase() === "C") {
//       returnValue = (+temperature - 32) * (5 / 9);
//       return `La temperatura es ${returnValue} °${degree.toUpperCase()}`;
//     } else {
//       return `La temperatura debe estar en F o C`;
//     }
//   } else {
//     return `La temperatura ingresada no es correcta: ${temperature}`;
//   }
// };

// console.log(userTemperature, userDegrees);
// alert(convertTemperature(userTemperature, userDegrees));

/* 4)Crear un programa para calcular el total de una compra. Para ello, se le tiene
qeu pedir al usuario qeu ingrese el precio de cada producto y, cuando ingrese la palabra 
total, devolverle el total de la compra    */
// const calculateTotal = () => {
//   let price = 0;
//   let result = 0;

//   do {
//     price = prompt(
//       "Ingrese el precio del producto, para finalizar ingrese la palabra ´TOTAL´:"
//     );
//     if (!isNaN(price)) {
//       result += +price;
//     } else if (price.toUpperCase() !== "TOTAL") {
//       alert(`El valor ingresado no es correcto. Solo TOTAL`);
//     }

//     console.log("price", price);
//     console.log("reusult", result);
//   } while (price.toUpperCase() !== "TOTAL");

//   return result;
// };

// alert(`El total de la compra es ${calculateTotal()}`);
