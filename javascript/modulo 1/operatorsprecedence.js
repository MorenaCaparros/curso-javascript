//esto es como lee el javascript por ejemplo si quiero calcular un promedio
console.log(30 + 20 / 2); //da 40, no resulta
console.log((30 + 20) / 2); // si da 25 hay qeu poner () proque la precedencia de la division es mas alta

//hay cosas qeu se leen de izq a derecha pero otras que son de derecha a izq
let nombre = "More";

let x, y;

console.log(x, y);

x = y = 15; // se lee 15 es igual a y qeu es igual a x. porque de izq a derecha seria, x es undefined, que es igual a y que es undefined que es igual a 15. No tiene sentido.

console.log(x, y);
