//es todo aquello que le da movimiento o dinamismo a las cosas que vemos en la progreamacion
//pueden representar cualquier cosa desde las interacciones básicas del usuario para notificaciones automatizadas de las cosas que suceden en el modelo de representación.

//https://developer.mozilla.org/es/docs/Web/Events

//para que el evento sew muestre puedo ir directamente al html y poner donde esta la imagen
//onclick = sayHello() entonces yo toco la imagen y seejecuta el hola mundo o puedo

//sino llo que se puede hacer es

const logo = document.querySelector('.puzzle-logo');

const sayHello = () => {
  alert('Hola Mundo');

  logo.removeEventListener('click', sayHello);
};

//lo que hago aca es removerlo una vez que se ejecuto porque no quiero qwue se ejecute todo el tiempo cada vez que se le hace click solo la
// primera vez
// logo.onclick = () => sayHello();

//otra manera es con
//addEventListener

logo.addEventListener('click', sayHello); //le paso el sayHello sin los parentesis porque sino se ejecuta antes
//ademas le puedo pasar diorectamente la funcion con el alerta seria asi: () => alert("ALGO ACA)
