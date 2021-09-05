// fsdf
//Number
console.log(typeof 3);
console.log(3.5);
console.log(typeof Infinity);
console.log(typeof NaN);

//Strings
console.log("Hola Mundo");
console.log(typeof "3");

//Booleanos
console.log(typeof true);
console.log(typeof false);

//Null y Undefined

console.log(typeof undefined);
console.log(typeof null); // null aparece como object pero no lo es

let miVariable; //no le puse valor, entonces es Undefined, cuando uso "Let" estoy creando una variable (se dice declarar)

console.log(miVariable);

miVariable = null; //le puse null es null el valor. Estoy asignando la variable, no vuelvo a poner "let" porque ya la declare

console.log(miVariable);

let miVariable3 = 3;

console.log(miVariable3);

console.log(2 + 8);

function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Santiaguito"));

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

miVariable = multiplicar(2, 3);
console.log(miVariable);

alert("hello World"); //alert se llama esto muestra una pagina en el navegador

let nombre = prompt("Ingresa tu nombre, no seas maleducado"); // es para que el usuario ponga su nombre ahi

console.log(nombre);

confirm("¿Estas seguro que deseas continuar?"); // le da al usuario para  que pueda aceptar o cancelar
