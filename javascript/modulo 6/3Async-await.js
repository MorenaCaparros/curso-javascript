//Async-await
const pagarConTarjeta = (precio, isConected) =>
  new Promise((resolve, reject) => {
    const limite = 10000;
    console.log('Procesando el pago');
    if (!isConected) return;
    setTimeout(() => {
      if (precio <= limite) resolve('Compra Aprobada');
      else reject('Compra Rechazada');
    }, 3000);
  });

//esto de aca si la promesa se resuelve
async function procesarPago() {
  //para poder usar el await hay que poner el 'async' siempre antes de 'function'
  //si la promesa se rechaza entonces agrego un try:
  try {
    const respuesta = await pagarConTarjeta(100, true); //si yo agrego await lo que hago es decirle que espere que se resuelva esa promesa para mostrarla
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

procesarPago(); //Procesando el pago, Promise 'pending'
console.log('otra tarea');
console.log('otra tarea');
console.log('otra tarea');

//si se quiere agregar como un arrow function
// const procesarPago = async () => {
//   try {
//     const respuesta = await pagarConTarjeta(100, true); //si yo agrego await lo que hago es decirle que espere que se resuelva esa promesa para mostrarla
//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// };

//si hay varias promesas>

const allPromises = [
  pagarConTarjeta(10, true),
  pagarConTarjeta(5000, true),
  pagarConTarjeta(1000, true),
];
const procesarPagos = async () => {
  try {
    const respuesta = await Promise.all(allPromises);
    console.log(respuesta);
    return 'todas resueltas';
  } catch (error) {
    console.log(error);
  }
};
//con que una de las promesas que estan en el array me de rechazada todas entran en compra rechazada
// y se va a ver 'compra rechazada'
//si estan todas aprobadas se va a ver asi "(3) ['Compra Aprobada', 'Compra Aprobada', 'Compra Aprobada']"
procesarPagos();

console.log(procesarPagos().then((response) => console.log(response)));

//lo que hace es devolverme "todas resueltas"
//porque TODAS fueron aprobadas, y es lo que dije en el return
