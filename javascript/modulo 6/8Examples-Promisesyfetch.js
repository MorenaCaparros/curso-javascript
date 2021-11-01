// Ejemplo 1
// const asyncOperation = new Promise((resolve) => resolve());
// //aca lo que se da es que se va a ver primero a juan despues a pedro y despues a amrio, porque se sale del flujo sincronico de javascript
// //entonces primero lee lo que esta en el call despues entra lo otro que es mario que es la promesa resuelta
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//Ejemplo 2 misma explicacion que el anterior va a mostrar amario ultimo porque tiene que resolverse la promesa antes
// //el fetch una vez que eso pasa ahi aparece mario
// const asyncOperation = fetch("https://jsonplaceholder.typicode.com/todos/1");
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");
