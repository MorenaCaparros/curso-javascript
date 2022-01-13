//desestructurar determinadas estructuras de valores

const name1 = ['More', 'Santi', 'Goofy']
const name2 = ['Juan Carlos', 'Antonio', 'Raul']

const person1 = {
  firstname: 'Juan',
  job: 'Arquitecto',
  city: 'Mar del Plata',
}

// const user1 = name1[0];
// const user2 = name1[1];
// const user3 = name1[2];

// console.log(user1, user2, user3);

//Con destructuring

const [user1, user2, user3] = name1 
//lo que hago es extraer los distintos objetos almacenarlos en variables pero todo en un mismo paso

console.log(user1, user2, user3);


// En objetos es asi:

//sin destructuring

// const user0 = person1.firstname
// const job = person1.job
// console.log(user0, job);

//COn destructuring

const {firstname, job} = person1;
console.log(firstname,job);

//lo uqe hago con destructuring es usar directamente la key qeu en este caso son esas como tambien podia ser city
// y como es objeto uso {} en Array uso []
//si yo quiero renombrar la variable hago {firstname: user1} le pongo dos puntos y como la quiero llamar
//y despues cuando la use uso ese nombre (en este caso user1)