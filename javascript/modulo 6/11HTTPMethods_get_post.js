// https://jsonplaceholder.typicode.com/guide/ pagina para practicar y ver mas ejemplos
//GET y POST, PUT, DELETE

//protocolo HTTP
//cuando estamos en la computadora navegando, necesitamos que cuando ponemos el nombre de la pagina
// esa pagina aprezca en nuestro navegador. Necesitamos que nuestra computadora, nuestro cliente vaya a buscar
//a un servidor toda la info que necesitamos para renderizar nuestra pag. o la que queremos ver en nuestro navegador.

//el protocolo es un estandar o un lenguaje de comunicacion entre el cliente y el servidor
//hay varios protocolos pero el mas usado para esas cosas es el HTTP
// compartir info entre distintas computadoras (archivos ccs, html, js, tambien imagnees)
// dos partes: el cliente (LA COMPUTADORA) y el servidor (la computadora donde va a estar almacenado ese
//recurso y es el que en definitiva nos lo va a enviar cuando nosotros se lo pidamos)

//GET --> solicitar datos o info al servidor
//POST --> Enviar info al servidor
//PUT --> Modificar info en el servidor
//DELTE --> borrar info del servidor

// GET
// fetch("https://jsonplaceholder.typicode.com/posts/10")
//   .then((response) => response.json()) //ESE FETCH TRAE UNA RESPUESTA que una vez que la tenga
//   //se la vaa convertir a json
//   .then((json) => console.log(json)); //con el get no se le iondica que metodo de HTTP se quiere usa
// //porque js entiende uqe si no se le indica nada se esta usando GET

//POST
// fetch("https://jsonplaceholder.typicode.com/posts", {//eso es un objeto que da las configuraciones que va a tener eso
//   method: "POST", //aca si se le aclara
//   body: JSON.stringify({  //antes de enviar la info hay q convertirla por eso el `JSON.stringify`
//     title: "foo", //estas 3 cosas es lo qeu se quiere enviar la info a enviar
//     body: "bar", //title, body, userId
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   }, //aca falta la `Authorization: `bearer asdasdasdasd` que es cuando tenemos una IP que es privada, q necesitamos un
//   //token para autenticarnos ha yqe u poner eso
// })
//   .then((response) => response.json()) //se puede revisar ahi mismo en consola al lado esta sources y al lado Network
//   //si se va ahi se muestra el Request URL, el request method (que en este caso es POST), el status code
//   //(si se googlea sale que siginifica cada uno) ESTO ES IMPORTANTE
//   .then((json) => console.log(json));

// //PUT
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT", //EN PUT SE PONE al lado de post por ej, el numero 1 en la URL porque
//   //se tieen qeu marcar que es lo que se quiere modificar
//   body: JSON.stringify({ //dentro del body sde pone toeda la data que se quiere actualizar
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PATCH => Actualiza parcialmente el recurso (por ej. podria en el caso anteriar solo
//cambiar el "title: foo" y todo el resto dejarlo sin cambiar)

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "foo",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//DELETE

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE", //como no se quiere cambiar nmi agregar nada solo se
//establece el metodo y al lado de la url el numero en este caso 1
// });
