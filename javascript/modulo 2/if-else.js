//Control de flujo
//Automatizar tareas repetitivas hasta que se cumpla
//una tarea determinada.

//IF/ELSE

// let age = 18;

// if (age >= 18) {
//   //esta es la condicion, que es mayor o igual a 18, siempre se evalua que es V o F
//   console.log(age >= 18);
//   console.log("Podes manejar"); // el if se usa como condicional y es "si esto es asi entonces..."
//   //el else es "si no pasa esto, entonces..."
// } else {
//   console.log(age >= 18);
//   console.log("No podes manejar");
// }

//Else if

let number = 0;

if (number < 10) {
  console.log("El numero es menor a 10");
} else if (number > 10) {
  //el else if es, "si no pasa esto, evaluo la otra condicion que seria else solo"
  // los else if se pueden poner varias veces
  console.log("el numero es mayor a 10"); //si pasa lo de arriba entonces hago esto, pero sino
} else {
  //evaluo esta y hago esto
  console.log("El numero es igual a 10");
}
