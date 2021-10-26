//Call stack JS es un lenguaje de un solo hilo que va realizando una tarea por vez
// tenemos un codigo, un Call Stack que es la pila o lista de ejcucion de nuestro motor
// van  estar cada una de las tareas que se van a ir  ejecutando en cada mommento
// despues estan las WEB APIS como la setTimeout que no estadentro del browser de JS
// Callback Queue: es como otra lista de tareas pero para aquellas funcionalidades
// asincronicas como las de Web Apis, porque una vez que estan listas para ser ejecutadas como
// por ejemplo paso el tiempo en setTimeout, no pasa directamente a Call Stack sino
// que pasa a Callback Queue
// Hay como un circulo como de recarga que se llama ?? sincroniza las tareas entre el CallbackQueue
// y la Call Stack

console.log("Hola"); //esto entra al Call Stack e imprime el mensaje Hola en la consolase limpia y pasa estar el setTimeout
setTimeout(function timeout() {
  // ve uqe no es codigo JS y lo mueve a la Web Apis y se va a quedar ahi hasta pase el plazo
  console.log("dentro del Timeout");
}, 5000);
console.log("Bienvenido"); //Js toma esto en el Call Stack para ejecutarla cuando pasen los 5 seg
//la funcion del timeout va a quedar lista para ser ejecutada va a pasar al Callback Queue
//y va a espertar hasta que el evenlop lo pase al Call Stack que eso va a pasar cuando este este vacio
