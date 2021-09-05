let nombre = "Morena";

let saludar = "¿cómo estas hoy?";

console.log(nombre); // este valor esta directamente en el codigo se llama VALORES LITERALES

let string = "123";

console.log(parseInt(string)); // lo que hace es convertir de String a Number
console.log(Number(string)); //es otra forma de convertir de String a Number
console.log(+string); //lo que hace es convertir de String a Number

let string1 = "123hola";

console.log(parseInt(string1)); // devuelve 123, va leyendo y devuelve lo que es un numero y corta ahi. Si tuviera 12hola3, devolveria solo 12, porque corta ahi
console.log(Number(string1)); //devuelve NaN  pq no es un numero o no se peude convertir
console.log(+string1); //tambien devuelve NaN, intentan ambos este y el de arriba, convertir todo

//para VALIDAR NUMEROS
console.log(isNaN(string1)); // si me devuelve true es que no es un numero, si esFALSE es un numero

console.log("hola " + nombre + " " + saludar); // Esto es concatenacion que se usa para unir dos o mas Strings

let string2 = "2";
let number = 0;

console.log(Boolean(string2)); // true (esto es para convertir de number o string a boolean)
console.log(Boolean(number)); //false pq el 0 da siempre falso de number

console.log(!!string2); // true
console.log(!!number); //false es otra forma de convertir a boolean con los !!, un signo ! lo que hace es negar, y si usamos dos niega lo negado

//Conversion Implicita
let number1 = 4;
let string3 = "7";
let number2 = 5;

console.log(number1 + string3); // "47" no pone 5 porque siempre que haya + los convierte en string
console.log(string3 + number1); // "74"
console.log(string3 + number1 + number2); // "745" porque primero leyo string entonces los concateno pero:
console.log(number1 + number2 + string3); // "97" porque primero vio el numero, suma y despues concatena

//en los otros casos de "-" "*" "/" "%" siempre convierte a number

console.log(number1 - string3); //-3
console.log(string3 - number1); // 3

console.log(number1 * string3); //28
console.log(string3 * number1); //28

console.log(number1 % string3); //4
console.log(string3 % number1); //3

console.log(number1 / string3); //0.5714285714285714
console.log(string3 / number1); //1.75
