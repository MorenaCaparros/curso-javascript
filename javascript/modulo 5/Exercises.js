//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.
Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)
 Futbol
 Basket
 Tenis
PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

class Sports {
  constructor(name, isIndividual) {
    this.name = name;
    this.isIndividual = isIndividual;
  }
  sayName() {
    console.log(
      `El deporte se llama ${this.name}. Es ${
        this.isIndividual ? "individual." : "por equipos."
      }`
    );
  }
}

class TeamSport extends Sports {
  constructor(name, numberOfParticipants) {
    super(name, false);
    this.numberOfParticipants = numberOfParticipants;
  }

  sayParticipants() {
    console.log(
      `Este deporte se llama ${this.name} y para jugarlo se necesitan ${this.numberOfParticipants} integrantes`
    );
  }
}

const tenis = new Sports("Tenis", true);
const golf = new Sports("Golf", true);
const futbol = new TeamSport("Futbol", 11);
const rugby = new TeamSport("Rugby", 15);

tenis.sayName();
golf.sayName();
futbol.sayName();
futbol.sayParticipants();
rugby.sayName();
rugby.sayParticipants();

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.
CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.
REALIZAR LAS SIGUIENTES TAREAS:
a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)
b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.
c) Calcular el total de productos que llevaron al picnic
*/
const AndreaBag = { cerveza: 2, sandwiches: 2, papasFritas: 1 };
const MartinBag = { porcionDeTorta: 1, gaseosa: 1, galletitasDulces: 1 };

console.log(AndreaBag);
console.log(MartinBag);

console.log(Object.keys(AndreaBag));
console.log(Object.keys(MartinBag));

const onlyBagMartin = Object.assign(MartinBag, AndreaBag);
console.log(onlyBagMartin);

const bagProducts = Object.values(onlyBagMartin);
console.log(bagProducts);

let totalBagProducts = 0;
bagProducts.forEach((products) => (totalBagProducts += products));
console.log(
  `La cantidad de productos que llevan en la bolsa es de ${totalBagProducts}`
);

//otras formas de hacerlo
// for (const key in MartinBag) {
//   if (Object.hasOwnProperty.call(MartinBag, key)) {
//     totalProducts += MartinBag[key];
//   }
// }

// console.log(totalProducts);

//const productsQuantity = Object.values(MartinBag);

//const totalProductsWithReduce = productsQuantity.reduce(
//(acumulador, currentValue) => acumulador + currentValue,
