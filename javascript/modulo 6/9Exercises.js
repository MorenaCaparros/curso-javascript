//EJERCICIOS

// 1) Vamos a simular una carrera entre 3 personas, Juan,
// Mario y Martin. El orden de largada sera siempre el
//siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo que el ganador sera aquel cuyo nombre sea
//el primero en aparecer.

// ACTIVIDAD: Utilizando solamente setTimeout y sin
// alterar el orden de lagrada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan

// console.log(`Vuelta 1:`);
// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// console.log("Martin");

//Vuelta 2:
// Juan
// Martin
// Mario

// console.log(`Vuelta 2:`);
// console.log("Juan");
// setTimeout(() => console.log("Mario"), 0);
// console.log("Martin");

// Vuelta 3:
// Martin
// Juan
// Mario

// console.log(`Vuelta 3:`);
// setTimeout(() => console.log("Juan"), 0);
// setTimeout(() => console.log("Mario"), 3);
//  console.log("Martin");

//otra manera de hacer esto es
// setTimeout(() => {
//   console.log(`Juan`);
//   setTimeout(() => console.log(`Mario`));
// }, 0);

// console.log("Martin");

// Vuelta 4:
// Mario
// Juan
// Martin

// console.log(`Vuelta 4:`);
// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// setTimeout(() => console.log("Martin"), 3);

//2) Utilizando setTimeout, crear una funcion que
// actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase
// como argumentos hasta llegar a 0. Para ese ejercicio
// no se puede utilizar ningun tipo de loop (for, while, etc)
//PISTA: Para resolver el ejerciio, pueden investigar un
// poco sobre funciones recursivas.

// let countDown = (second) => {
//   setTimeout(() => {
//     if (second < 0) {
//       return 0;
//     }

//     console.log(second);
//     return countDown(second - 1);
//   }, 1000);
// };

// countDown(prompt(`Ingresa un numero:`));

// //como funcion la funcion recursiva
// 1; // La entrada actual es 5
// 2; // Es 5 igual a 0 ?
// 3; // No, Ok entonces imprime 5 en la consola.
// 4; // Se llama asi misma de nuevo con el numero - 1 O 5 - 1;
// 5; // La entrada principal es 4
// 6; // Es 4 igual a 0 ?
// 7; // No, Ok entonces imprime 4 en la consola.
// 8; // Repite hasta que la entrada sea 0, y asi la función deja de llamarse a si misma.

//3) Utilizando la API de GITHUB (https://api.github.com)
//realizar las siguientes tareas

// a) Obtener una lista de los repositorios publicos
// (Documentacion de la API: https://docs.github.com/es/rest/reference/repos#list-public-repositories)
const baseURL = `https://api.github.com`;

const getPublicRepositories = async () => {
  const response = await fetch(`${baseURL}/repositories`);

  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};

// b) Generar una funcion que a partir de la respuesta
// del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados
const showNames = async () => {
  const repositories = await getPublicRepositories();
  const names = repositories.map((repo) => repo.owner.login); //aca esta iterando, cuando pongo el punto . lo qeu hago es decir
  //entra aca al primero itera y busca el segundo elemento. para poder usar Map, tiene que ser un array.
  //si yo tuviera primero un objeto entonces haria "(el nombre del objeto).(el nombre del array).map( dentro de aca hago lo mismo uso el map)"

  console.log(names);
  return names;
};

showNames();

//c) Tomar de la respuesta al primer respositorio, y
// listar todos los repositorios del owner.
// PISTA: Para ver el endpoint al cual deberas pegarle
// para traer los repositorios del owner, deberas
// inspeccionar la informacion que recibes dentro del
// primer request.

const showFirstOwner = async () => {
  const namesList = await getPublicRepositories();

  const firstName = namesList[0];
  const repoUrl = firstName.owner.repos_url;
  const responses = await fetch(repoUrl);
  const jsonResponse = await responses.json();
  console.log(jsonResponse);
  return jsonResponse;
};

showFirstOwner();
