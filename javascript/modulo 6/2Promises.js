//PROMESAS
// console.log('Me despierto');
// console.log('Me lavo la cara');
// console.log('Pongo la pava');
// setTimeout(() => {
//   console.log('El mate esta listo');
// }, 0);
// console.log('Me doy una ducha');
// console.log('Desayuno');

//Ejmplo 1
// function payWithCard(price) {
//   const limit = 10000;

//   for (let index = 0; index < 5000; index++) {
//     console.log('Conectando...');
//   }

//   if (price < limit) console.log('Purchase Approved');
//   else console.log('Purchase Rejected');
// }

// console.log(payWithCard(10)); //sale Purchase Approved
// console.log(payWithCard(500000)); // sale Purchase Rejected

//Ejemplo 2 d
// function payWithCard(price) {
//   const limit = 10000;

//   console.log('Conectando...');
//   setTimeout(() => {
//     if (price < limit) console.log('Purchase Approved');
//     else console.log('Purchase Rejected');
//   }, 5000);
// }

// console.log(payWithCard(10)); //sale Purchase Approved
// console.log(payWithCard(500000)); // sale Purchase Rejected

//el problema es que en ambos casos tengo un tiempo de respuesta
//qeu es el q yo le pongo y yo no se si en ese tiempo se va a salucionar
//mi problema. Puede ser que se rompa. Para eso estran las promesas
//Con el caso de la tarjeta, esta no sirve en si para pagar, lo q yo
//estoy haciendo es prometer que te voy a pagar pasando la tarjeta

//Promesas tiene 3 estados: Pendiente, resuelta, rechazada

// const payWithCard = (price, isConected) =>
//   new Promise((resolve, reject) => {
//     if (!isConected) return;
//     const limit = 10000;

//     if (price < limit) resolve('Purchase Approved');
//     else reject('Purchase Rejected');
//   });

// console.log(payWithCard(40, true)); //Promise {<fulfilled>: esto es cumplida  'Purchase Approved'}
// si le paso un numero mas alto del limite sale:
//Promise {<rejected>: 'Purchase Rejected'}

// por otro lado lo segundo que le paso es true o false porque la segunda variable es
//qeu si no esta conectada me va a salir 'Promise {<pending>}' la promesa pendiente es que no se va a resolver nunca
//Si si esta conectada le paso true y vuelve a todo lo demas

//Usar setTimeout
const payWithCard = (price, isConected) =>
  new Promise((resolve, reject) => {
    const limit = 10000;
    console.log('Processing the payment');
    if (!isConected) return;

    setTimeout(() => {
      if (price < limit) {
        resolve('Purchase Approved');
      } else {
        reject('Purchase Rejected');
      }
    }, 3000);
  });

// console.log(
//   payWithCard(5000000, true)
//     .then((respuesta) => {
//       console.log(respuesta); //lo que hace el then es agarrar una respuesta y cuando esta llega, ejecutarla
//       //despues de lo que haya en este caso 'Another task'. Si yo le pongo un valor uqe me da error
//       // en este caso mas de 10000,
//     })
//     .catch((error) => console.log(error)) //catch se utiliza cuando hay un rejected (el error puede ir otra palabra pero l oqeu importa es que se usa como para q el error no se muestre mas)
// );
// console.log('Another task');

console.log(
  payWithCard(5000000, false) //aca es si la promesa esta pendiente
    .then((respuesta) => {
      //nunca me va a dar esta respuesta. TDOO lo qeu tenga que ver con la respuesta tiene que ir dentro del then
      //todo lo que tenga que ver con el manejo de error tiene que ir dentro de catch
      //el resto puede ir por afuera
      console.log(respuesta);
    })
    .catch((error) => console.log(error))
);
console.log('Another task');
console.log('Another task');
console.log('Another task');
console.log('Another task');
console.log('Another task');
console.log('Another task');
