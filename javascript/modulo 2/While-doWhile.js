//Hay que declarar let i = a algun numero.

let i = 0;

while (i <= 10) {
  console.log(i);
  i++; //puede que esto no se ejecute en cambio en el do while
  //siempre se ejecuta por lo menos una vez. El i++ lo puedo poner al final
  //donde lo necesite. Primero manipulo i y despues lo incremento
}

//Do while:

do {
  console.log(i);
  i++;
} while (i <= 10);

//cuando se que cantidad de iteraciones voy a tener lo mas recomendable es usar FOR
//Pero si dependo de una condicion cuanto va a durar o cuanto va durar uso while
// o do while.

let number = 1;

while (number < 1) {
  //aca primero evalua qeu es false y por eso no lo ejecuta
  console.log("con while", number);
  number++;
}

do {
  console.log("con do while", number); //primero ejecuto el con DO WHILE, number y despues
  number++;
} while (number < 1); //aca frena porque la condicion es false
