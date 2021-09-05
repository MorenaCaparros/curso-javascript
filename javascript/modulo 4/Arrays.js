/* ARRAYS: coleccion ordenada de datos

Formas de declarar un array
*/

const miArray = ["Mochi de Abel", "Cartera de Belen", "Bolsa de Candela"]; //esta es la manera mas comun de declarar un Array
const otroArray = new Array(); //esta es otra manera pero - comun

console.log(miArray); //se va a ver de forma asi (3) ("Mochi de Abel", "Cartera de Belen", "Bolsa de Candela") y si abris pq
//hay una flechita se ve: 0: "Mochi de Abel"
//1: "Cartera de Belen"
//2: "Bolsa de Candela"
//length: 3 (es la cantidadde elementos)
//Tienen numeros porqe si yo quiero acceder a uno determinado entonces hago esto:
console.log(miArray[0]); // ACA VOY A VER solo "Mochi de Abel", es para acceder Array

//al array se le puede almacenar otro array booleano, number, string, un objeto, cualquier tipo de valor.
//puedo si quiero, guardar en una variable un elemento entonces:

const element = miArray[0];

console.log(element); // me va  a dar Mochi de abel. Tambien puedo
console.log(`En ese casillero esta la ${element}`);

//se puede modificar un elemento por ejemplo:
miArray[0] = "la cartera de pablo";
console.log(miArray[0]); // se va a ver "la cartera de pablo"
