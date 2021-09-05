const miArray = ["A", "B", "C", "D"];

//PARA acceder aal ultimo se ve el ultimlo y se le resta 1 porque arranca en 0

const lastElement = miArray[miArray.length - 1];

console.log(lastElement); // en este caso me va adar  "D"

//Buscar el indice de un element
//yo quiero saber donde esta "B" entonces

const element = "C";
//se usa indexOf
const index = miArray.indexOf(element);

console.log(index); // da 2 porque "C"esta en el 2

console.log(miArray(index)); //va a mostrar "C"

//si quiero buscar un elemento que no esta index va a devolver -1 o undefined

const otherElement = "X";

const otherIndex = miArray.indexOf(otherElement);

console.log(otherIndex); //va a devolver -1

console.log(miArray(otherIndex)); // va a devolver undefined

//puedo hacer tambien
miArray[1] = "Crood";

//Agregar un elemento al dinal del Array

//PUSH

miArray.push("LALA");

//REMOVER un elemento del final del Array

// miArray.pop()//esto vaa a devolver el elemento que se elimino, se le puede asignar una variabel

const removedElement = miArray.pop();

//Agregar un elemento al ppio del Array

//Unshift

const newLenght = miArray.unshift("Jorge"); // no necesito agregar una variable

//REMOVER un elemento del final del Array

//SHIFT

const removedOtherElement = miArray.shift();

//SPLICE nos permite remover una serie de elementosdel Array
const miOtherArray = ["lala", "cece", "ola", "coca, cola"];
miOtherArray.splice(1, 2); //lo que hago es borrar cece y ola, si pongo [1,3] estoy removiendo todos menos "lala"

//Ejemplo:
//Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que
//se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1)
//empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso,
//como pos vale 1, elimina un elemento comenzando en la posición 1 del array,
//es decir "Banana"let elementoEliminado = frutas.splice(pos, 1)
// ["Manzana", "Fresa"]

//SLICE: lo que hace es recortar el Array, pero este no se mopdifica, sino que se extrae del Array una parte para poder usarla luego
//[1,3] es desde el primer numero hasta el numero anterior al ultimo que puse ej:

const newArray = miOtherArray.slice(1, 3); // extraigo en este caso "cece" y "ola" y los guarde en "newArray"

//FILTER busca todos los que estan cumpliendo la condicion y los devuelve. Sino esta, devuelve []
const miArray = ["A", "B", "C", "D", "F", "G", "H", "A"];

const filteredArray = miArray.filter((name) => name === "A"); //lo que se hace es si esa condicion se cumple, eso va a la nueva variable

//FIND va a devolver el primer valor que cumpla con la condicion. Si la condicion no esta devuelve undefined
const existingElement = miArray.find((name) => name === "A");

// Esto sirve para  por ejemplo decir
if (existingElement) {
  console.log("El nombre esta en la lista");
} else {
  console.log("El nombre no esta en la lista");
}
