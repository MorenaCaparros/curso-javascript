//Declaracion de la funcion. La funcion de por si no hace hasta uqe no se la llama o invoca
function sum(num1, num2) {
  console.log(num1 + num2); //si quiero modificar algo lo hago de aca, por ejemplo en vez de un
  //console.log que sea un alert u otra cosa
}

//INVOCAR LA FUNCION, LLAMAR A LA FUNCION

sum(2, 3); //se va a ver 5 pq se llamo la funcion
sum(5, 3); //8
sum(2, 9); // 11

//
//Estructura de una function

// // function   +  nombre         + parametros              + llaves
//    palabra    +  opcional       +  Lista de parametros    + las instrucciones
//    reservada  +  la convencion  + para la funcion         + que definen la
//                 es arrancar con +  encerrados entre       + funcion, encerradas
//                 un verbo        + parentesis y separados  + por llaves {}
//                                   por comas

function sayHello(name) {
  /*lo qeu esta adentro de los parentesis se llama parametro (name)*/
  console.log(`Hola ${name}`);
}

sayHello(`Alexis`); //cuando esta se llama ARGUMENTO lo qeu esta adentro del parentesis

//DISTINTAS FORMAS DE DEFINIR UNA FUNCION

//FUNCION DECLARACION
function sayHello(name) {
  return console.log(`Hola $(name)`);
}

//FUNCION EXPRESION. se crea una variable y a esa variable se le asigna una funcion, que esa no tiene nombre
const sayHello1 = function (name) {
  return console.log(`Hola ${name}`);
};

//Arrow function. No se usa function sino =>
const sayhello2 = (name) => {
  return console.log(`Hola ${name}`);
};

//Arrow function (return implicito). Es igual al anterior y se usa cuando solo hay una linea para ejecutar
// no se pone ni return ni los {}

const sayHello3 = (name) => console.log(`Hola ${name}`);

//RETURN

//lo qeu hace es decir "yo quiero que lo que esta funcion retorne algo" va a retornar lo queeste a su derecha

function sayHi() {
  return "Hola Mundo";
}

console.log(sayHello());

//si yo no pongo return, me va a devovler "undefined". el return corta le ejecucion, todo lo que esta despues no se ejecuat

function suma(num1, num2) {
  return; //despues de eso no se va a ejecutar
}

//para que se vea es necesario llamarla por ejemplo con
console.log(suma(2, 3) + 5);
