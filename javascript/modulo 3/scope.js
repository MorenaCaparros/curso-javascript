//scope: el alcance que tienen nuestras variables. el primer isValid, sirve para todo
//pero los que estan adentro de la funcion, solo sirven para esa funcion.
//VAR, no tiene el valor acotado al bloque**

let isValid = false;

function validatePermission(role) {
  let validRole = "admin";
  let isValid = true;

  if (role === validRole) {
    let isValid = true;
    console.log("Dentro del if", isValid);
  } else {
    let isValid = false; /* si aca se pone var  y en el de function tmn, este var va a pisar el true de el de function. por eso NO hay que usar var*/
    console.log("Dentro del else", isValid);
  }

  console.log("Dentro de la funcion", isValid);
}

validatePermission("any");

console.log("A nivel global", isValid);
