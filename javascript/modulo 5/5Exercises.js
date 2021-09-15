/* Crear una clase Deportes, que reciba el atributo nombre y un metodo 
que permita mostrar por consola ese nombre. Ademas crear uin metodo que permita 
mostrar si el deporte es individual o por equipos.

Crear una sub-clase qeu sea DeporteDeEquipo que permita ademas del nombre,
el numero de integrantes que deben formar parte de ese equipo.
Crear un metodo para mostrar el sig. mensaje:

"Para jugar al futbol necesitas 11 jugadores por equipo".

Tener en cuenta que 'futbol' y 11 son valores que pueden variar
dependiendo del deporte (por ej. si fuese basket, seria 5 jugadores)

PARA ESTA ACT., USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

// class Sports {
//   constructor(sportName, isIndividual) {
//     this.sportName = sportName;
//     this.isIndividual = isIndividual;
//   }

//   showMessage() {
//     console.log(
//       `Este deporte se llama ${this.sportName} y se juega de manera ${
//         this.isIndividual ? 'individual' : 'grupal'
//       }`
//     );
//   }
// }

// class TeamSports extends Sports {
//   constructor(sportName, numberOfMembers) {
//     super(sportName, false);
//     this.numberOfMembers = numberOfMembers;
//   }

//   showSportMembers() {
//     console.log(
//       `Para jugar al ${this.sportName} necesitas ${this.numberOfMembers}`
//     );
//   }
// }

// const tenis = new Sports('Tenis', true);
// tenis.showMessage();

// const basket = new TeamSports(`Basket`, 5);
// basket.showMessage();
// basket.showSportMembers();

// const futbol = new TeamSports(`Futbol`, 11);
// futbol.showMessage();
// futbol.showSportMembers();

// const rugby = new TeamSports(`Rugby`, 15);
// rugby.showMessage();
// rugby.showSportMembers();

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa de papas 
fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa y 1 paquete
de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS, DONDE CADA PRODUCTO
TENGA LA CANTIDAD QUE LLEVO CADA UNO

REALIZAR LAS SIG. TAREAS:

a) Mostrar  por consola los productos que llevo ccada uno (solo el nombre 
    del producto)
    
b) En el camino al picnic, la bolsa de Andrea se rompio, por lo que tuvieron que 
poner todo en la bolsa de Martin. Realizar el cambio correspondiente para que la bolsa
de Martin tenga el total de los productos del picnic

c) Calcular el total de producots que llevaron al picnic 
*/

class Bag {
  constructor(items) {
    this.items = items;
  }
}

const bag = new Bag(['Cerveza', 'Sandwich']);
