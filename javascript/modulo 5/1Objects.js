//OBJETOS
/* Como no hay un a posicion en los objetos, es que estan las KEY que son para
cuando  quiero ir a buscar ese objeto, poder saber donde esta. o cual es Ej
(key: value)
(firstName: "More") aca firstName va a ser mi key, y me sirve para despues ir a buscarla
si quiero ir a buscar mi nombre.*/

//DECLARAR UN OBJETO en JS
//una forma:

const literalObject = { firstName: "More" };

console.log(literalObject); // me va a salir : /* ﻿ Objects.js:13 Object
/* firstName: "More"
                                                [[Prototype]]: Object */

//otra forma de declarar es:
const normalObject = new Object(); //va a estar el objeto vacio si le queiro dar un valor hago:
normalObject.firstName = "More";

console.log(normalObject.firstName); //"More"
console.log(normalObject); //{firstName: "More"}

normalObject.job = "Estudiante";
console.log(normalObject); //{firstName: "More", job: "Estudiante"}

//si quiero reasignar un nuevo valor pongo lo mismo = "la otra cosa que quiero cambiar" Ej:
normalObject.job = "Abogada/Programadora en IA";
console.log(normalObject); //{firstName: "More", job: "Abogada/Programadora en IA"}
