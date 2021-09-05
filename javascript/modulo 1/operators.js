//Aritmeticos: Unarios; Binarios;
console.log("ARITMETICOS");
//Unarios (-; +; typeof)
console.log("Unarios: -;+;TYPEOF");

console.log(typeof "hola bb"); //string
console.log(+"123"); //lo convierte a Number
console.log(-"-123"); //lo convierte a Number pero lo invierte si tengo + va a ser - y si es - va a ser +
console.log(-"tren"); //Nan

//Binarios (+; -; *; /; %)
console.log("Binarios: +; -; *; /; %");

console.log(3 + 6); //9
console.log(3 - 6); // -3
console.log(3 * 6); // 18
console.log(3 / 6); // 0.5
console.log(3 % 6); // 3 (es el resto de la division, sin la coma)

//Logicos
console.log("LOGICOS");

//Binarios (&&; ||; !; ===; ==; <>)
console.log("Binarios (&&; ||; !; ===; ==; <>)");

//Mayor y menor
console.log("Mayor y menor");

console.log(2 > 3); // devuelve false pq el 2 no es mayor que el 3
console.log(2 < 3); // devuelve true pq el 2 es mayor que 3
console.log(3 >= 3); // true pq es mayor o igual
console.log(3 <= 3); // true

//=== y ==
console.log("IGUAL === Y ==");

console.log(2 === 2); //es para ver si dos es igual a dos, da true
console.log(2 === 4); // false. El triple igual compara TIPO y VALOR
console.log(2 == 2); //es para ver si dos es igual a dos, da true
console.log(2 == 4); // false. El  doble igual compara VALOR solamente

console.log(2 === "2"); //False pq mismo valor pero diferente tipo
console.log(2 == "2"); // va a seguir dando true, pq es el mismo valor
//siempre se utiliza el triple igual, que es comparacion estricta, a menos que sea estrictamente necesario usar dos.

console.log(2 !== 5); //comparacion estricta, es distinto el ! 2 !==(distinto) de 5
console.log(2 != 4); // solo compara valor

//AND && (aca todo va a dar falso a menos que las dos sean verdaderas, solo ahi va a dar true)
console.log("AND: &&");

console.log(2 === 2 && 2 > 0); // las dos son true
console.log(2 === "2" && 2 > 0); //la primera es false pq es stringe, la segunda verdadera. Es false.
console.log(2 === 2 && 2 < 0); // la 1era es true, la ultima es false. Es false
console.log(2 === "2" && 2 < 0); // las dos son false. Es false

//OR || (aca todo va a dar true, a menos que ambas sean false)
console.log("OR: ||");

console.log(2 === 2 || 2 > 0); // las dos son true
console.log(2 === "2" || 2 > 0); //la primera es false pq es stringe, la segunda verdadera. Es true.
console.log(2 === 2 || 2 < 0); // la 1era es true, la ultima es false. Es true
console.log(2 === "2" || 2 < 0); // las dos son false. Es false

//TERNARIO: Hace una comparacion y devuelve un resultado si la validacion es true, y otro si es false
console.log("TERNARIO: ? el : se usa para expresar SINO");

let edad = 16;

console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar, sucio");
