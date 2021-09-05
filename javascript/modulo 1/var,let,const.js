//VARAIBLES: tiene 3 partes. La parte RESERVADA, en donde se declara una variable, el NOMBRE que le vamos a dar, y el VALOR que vamos a guardar en esa variable

//palabras reservadas paradeclarar una variable

//VAR, LET Y CONST.
//var fue la primer forma para declarar una variable que dio javascript. Tiene problemas para ponerla en algunos bloques especificos y ahi es uqe surge
//let y const. Siempre se usan estas. a let le puedo cambiar el valor, en cambio a const  no
//lo mejor es usar siempre const

var miVariable = 3; // se puede  no ponerle ningun tipo de valor.
let otraVariable = 5; // se puede  no ponerle ningun tipo de valor.
const otraVariable1 = 8; // Ni bien se declara se tiene que poner el valor.

console.log(miVariable);
console.log(otraVariable);
console.log(otraVariable1);

otraVariable = 15; // ahora pasa a ser 15 el valor
//const otraVariable1 = 15; //tira error "Identifier 'otraVariable1' has already been declared"

console.log(otraVariable);
//console.log(otraVariable1);

//en let no se puede empezar con numeros, ni tampoco ponerle "." Se puede usar $ y _ . No se pueden usar palabras reservadas
