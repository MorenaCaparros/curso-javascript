/* Dada la siguiente lista de invitados en ese orden:
Lucas,
Matias,
Jose,
Pedro,
Martina,
Marcelo,
Esteban,
Marcela,
Martin


1)Informar por consola el numero de invitados
*/
const guestList = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

const numberOfGuest = guestList.length;

/*
2) Imprimir por consola el nombre del ultimo invitado*/

const lastGuest = guestList[numberOfGuest - 1];
console.log(lastGuest);

/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que hay q agregarlo al final de la lista*/
guestList.push("Pedro");
console.log(guestList);
/*
4)Media hora antes de empezar, Marcela confirmo qeu no podia asistir. Generar una nueva lista 
qeu contenga los invitados que confirmaron su presencia*/
const index = guestList.indexOf("Marcela");

const removedElement = guestList.splice(index, 1);

console.log(`La nueva lista de invitados es: ${guestList}`);

/*
5)Por cada invitado, asignarle un numero de orden conforme su posicion en la lista. Mostrar
este numero de orden en un nuevo Array de la siguiente manera: "Juan. Orden 1"*/

const guestPosition = guestList.map((name, index) => {
  return `${name}. Orden ${index + 1}`;
});

console.log(guestPosition);

/*
6)Suponiendo que los invitados consumieron la sig cantidad de platos

Lucas: 3 platos
Esteban: 1 plato
Jose: 1 plato
Los restantes: 4 platos

Calcular el numero total de platos consumidos al final de la fiesta*/
let totalofDishes = 0;

guestList.forEach((name) => {
  if (name === "Lucas") {
    totalofDishes += 3;
  } else if (name === "Esteban" || name === "Jose") {
    totalofDishes += 1;
  } else {
    totalofDishes += 4;
  }
  console.log(name, totalofDishes);
  // return (totalofDishes += totalofDishes);
});
console.log(totalofDishes);

// const total = guestList.reduce((acumulador, valorActual) => {
//   if (valorActual === "Lucas") {
//     acumulador += 3;
//   } else if (valorActual === "Esteban" || valorActual === "Jose") {
//     acumulador += 1;
//   } else {
//     acumulador += 4;
//   }
//   console.log(valorActual, acumulador);
//   return acumulador;
// }, 0);

// console.log("total", total);
/*

7)Acomodar los invitados por orden alfabetico.*/

guestList.sort();
//const orderGuestList = guestList.sort((a, b) => (a > b ? 1 : -1));// a y b son parametros y depsues l oqeu hago es decir que "a" es menor que "b"
// y que me los ordene asi, como al reves

console.log(guestList);
