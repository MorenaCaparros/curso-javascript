//1) Pedir al usuario que ingrese su nombre.
//Guardar ese nombre en una variable y
//utilizarlo para saludar al usuario
//(por ejemplo "Hola Alexis")

// const name = prompt("Ingresa tu nombre, sucio o sucia:");

// console.log(name);

// alert(`Hello ${name}`);

// 2)Pedirle a un usuario que ingrese 2 numeros y
// devolverle la suma de dichos numeros

// const numberOne = +prompt("Ingrese un número, sucio:");
// const numberTwo = +prompt("Ingrese otro número, sucio:");

// alert(`La suma es: ${numberOne + numberTwo}`);

// 3)Pedirle a un usuario que ingrese dos numeros y devolverle
// el doble de la suma de dichos numeros

// const numberOne = +prompt("Ingrese un número, sucio:");
// const numberTwo = +prompt("Ingrese otro número, sucio:");

// alert(`El doble de la suma de los numeros es: ${(numberOne + numberTwo) * 2}`);

// 4)Pedirle al usuario que ingrese el ancho y el alto
// de una habitacion y calcular la superficie

// const numberOne = prompt("Ingrese el ancho de la habitación:");
// const numberTwo = prompt("Ingrese el alto de la habitación:");

// alert(`La superficie de la habitación es: ${numberOne * numberTwo} m²`)

// 5)Pedirle al usuario que ingrese su nombre y devolverle
// el nombre todo en minusculas

const name = prompt("Ingresa tu nombre, sucio o sucia:");
//alert(`Hola ${name.toLowerCase()}`)

// 6)Pedirle al usuario que ingrese su apellido y devolverselo
// todo en mayusculas
const lastName = prompt("Ingresa tu apellido, sucio o sucia:");
//alert(`Hola ${name.toLowerCase()} ${lastName.toUpperCase()}`)

// 7) Pedirle al usuario el nombre, el apellido y la edad
// Mostrar el siguiente mensaje:
// Nombre: Juan
// Apellido: Perez
// Edad: 20

const age = prompt("Ingresa tu edad, sucio o sucia:")

alert(`Nombre: ${name} \nApellido: ${lastName} \nEdad: ${age}`)

// con la \n hago enter sin hacerlo. la \ es con Alt + 92