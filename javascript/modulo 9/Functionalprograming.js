//Programacion funcional
//Pensar el codigo desde el lado de las funciones, que cualquier cosa que pueda ser almacenada en una variable puede ser retornada luego en una funcion
//las variables nos sirven para almacenar un valor

//Ejemplo puedo hacer esto
// const firstName = 'Morena';

// console.log(firstName);

//Pero tambien lo puedo hacer como una funcion

const getFirstName = () => 'Morena';

console.log(getFirstName);

//Ejemplo 2

// const two = 2;

// console.log(two + 3); //va a dar 5

//Con funcion seria
const getTwoNumber = () => 2;

console.log(getTwoNumber + 3); //va a dar 5

//PRINCIPIOS

//Inmutabilidad

const name1 = ['More', 'Santi', 'Goofy'];
const name2 = ['Juan Carlos', 'Antonio', 'Raul'];

const person1 = {
  firstname: 'Juan',
  job: 'Arquitecto',
  city: 'Mar del Plata',
};

//si yop quiero agregar un nombre a la lista name1 o name2 no lo tengo que agregar directament
//lo que debo hacer es

const addMember = (currentMembers, newMembers) => {
  const newMemberList = [...currentMembers, newMembers];
  return newMemberList;
};
//lo que estoy haciendo es crear una copia de la lista y agregandole a esa un nuevo miembro

console.log(addMember(name1, 'Marcelo')); //Array(4) 0: "More" 1: "Santi" 2: "Goofy" 3: "Marcelo"

console.log(name1); //Array(3) 0: "More" 1: "Santi" 2: "Goofy"

//Funcion Pura cuando no produce efectos secundarios a cualquier variable global y cuando sabemos que si le pasamos
//siempre los mismos argumentos nos va a retornar siempre lo mismo. Es importante que todo lo que podamos lo pasemos a funciones puras
//porque es mas facil de testear y despues hay librerias/lenguajes que necesitan que las funciones sean puras

// const sum = (a, b) => a + b;

// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3)); // 5

// //Una funcion que no es pura seria:

// const getRandomNumbers = () => Math.random();
// const sumRandom = (a, b) => a + b + getRandomNumbers();

// console.log(sumRandom(2, 3)); // 5.032511312814842

// console.log(sumRandom(2, 3)); // 5.603596032778539

// console.log(sumRandom(2, 3)); // 5.1432900086383775
// console.log(sumRandom(2, 3)); // 5.218884292123111
// console.log(sumRandom(2, 3)); // 5.392520960817171

//High Order Functions on funciones que cumplen al menos una de las siguientes condiciones: Tomar una o más funciones como entrada Devolver una función como salida
const logResult = (result) => console.log(result);
const alertResult = (result) => alert(result);

const sum = (a, b, callback) => callback(a + b);

sum(2, 3, logResult);
sum(2, 3, alertResult);

//map y forEach tambien son funciones High Order Functions

name2.forEach(logResult);
