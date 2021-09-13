class Animal {
  //este vendira a ser la base que es animal
  constructor(name, isDomestic) {
    this.name = name;
    this.isDomestic = isDomestic;
  }

  speak() {
    console.log(`${this.name} hace un ruido`);
  }
}

// const dog = new Animal("Rulo");

// dog.speak(); // lo que me va a devolver es "Rulo hace un ruido", entonces
// //para ser mas esoecifico y quisiera decir que el perro ladra diria

//tambien se le puede agregar si es domestico o no, lo que va a devolver true o false

class Dog extends Animal {
  //si yo quiero agregar como datos al dog que no estan en la base (que seria Animal)
  //lo que hago es tambien poner un
  constructor(name, age, isDomestic) {
    super(name, isDomestic); //esto es para traer cosas de la clase anterior, aca le agrego isdomestic
    this.age = age;
  }

  speak() {
    console.log(
      `${this.name} hace un ruido y ${
        this.isDomestic ? "es domestico" : "es salvaje"
      } `
    );
  }

  sayAge() {
    console.log(`${this.name} tiene ${this.age}`);
  }
}

const dog = new Dog("Rulo", 5, true); //sale Rulo ladra, porque entrendio qe es un dog, si quiero que diga que
// es domestico tengo que poner TRUE

dog.speak();

dog.sayAge(); // cuando le agregue el 5 sale Rulo tiene 5
