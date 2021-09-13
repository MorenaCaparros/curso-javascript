//Programacion orientada a objetos
//todo lo que nosotros vamos a utilizar en nuestra aplicacion son objetos y esos objetos
// van a partir de una base padre que va a ser la que va a declarar la forma que van a tener esos objetos
// y que proppiedades van a tener. Una vez uqe tenemso esa base padre/madre declarada vamos a crear otros
//objetos que sean hijos que van a tener valores y que eventualmente van a tener propiedades que le sean
//propias.  EJ se quiere crear un objeto que almacene datos de mi persona.

//para no tener que repetir todo el tiempo "job", "firstName", "city", se crean CLASES

//Clase PERSONA (vendria a ser la base padre/madre)
//3 propiedades : firstName, city, job

class Persona {
  constructor(firstName, city, job) {
    this.firstName = firstName;
    this.city = city;
    this.job = job;
  }

  //si yo quiero puedo agregar dentro de esto mismo una funcion o algo por ej:
  saludar() {
    console.log(`Hola soy ${this.firstName}`);
  }
}

//esto es una manera uqe no se hace
// const persona1 = new Object();
// (persona1.firstName = "More"),
//   (persona1.city = "Mar del Plata"),
//   (persona1.job = "Abogada");

// const persona2 = new Object();
// (persona2.firstName = "Santi"),
//   (persona2.city = "Mar del Plata"),
//   (persona2.job = "Programador");

// const persona3 = new Object();
// (persona3.firstName = "Goofy"),
//   (persona3.city = "Mar del Plata"),
//   (persona3.job = "Molestar");

//DE LA FORMNA QUE SI

const Morena = new Persona("Morena", "Mar del Plata", "Lawyer");
const Santiago = new Persona("Santiago", "Mar del Plata", "Software Engineer");
const Candela = new Persona("Candela", "Mar del Plata", "Lawyer");

console.log(Morena, Santiago, Candela); //tira Persona {firstName: "Morena", city: "Mar del Plata", job: "Lawyer"} Persona {firstName: "Santiago", city: "Mar del Plata", job: "Software Engineer"} Persona {firstName: "Candela", city: "Mar del Plata", job: "Lawyer"}
Morena.saludar(); //para que me salga el nombre tengo que si o si poner los parentesis
