//hositing es como levantar algo hacia arriba. las coloca como si estuviera al tope
//javascript cuando empieza a leer el codigo, lo pone por arriba no importa donde este ese codigo

console.log(year); // lo que hace el hositing aca es traer a var como si stuviera arriba de ese console.log
// pero el valor lo tiene como = undefined

console.log(color); // aca no se puede, tira error y dice que no se puede usar color
//antes de que se inicialice (deberia estar "let color" antes del console.log)

console.log(firstName); //pasa lo mismo que con let

let color = "red";
const firstName = "Morena";
var year = 2021;

//con las funciones tambien puede haber hositing ej:
console.log(sayHello()); //lo trae aca arriba (como si estuviera arriba
//de este console.log) y sale "Hola mundo"

console.log(sayGoodBye); //tira mismo error que arriba con const pq tieen asignado const
//lo mismo si tuviera let. Si tuviera var, saldria "undefined". Lo mismo con sum

function sayHello() {
  return "Hola mundo";
}

const sayGoodBye = function () {
  return "Bye Bye";
};

const sum = (num1, num2) => num1 + num2;
