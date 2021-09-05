// construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en 1er lugar vamos a
// mostrar un mensjae que le de la bienvenida al usuario y le pregunte si desea registrarse (Pista: recuerden que habia un metodo del
// navegador que permita hacer este tipo de consultas al usuario, devolviendo true o false segun el caso)
// en caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en 1er lugar. El nombre de usuario
// tiene que tener por lo menos 3 caracteres y no va a ser  case sensitive, por lo qeu vamos a almacenar en minusculas, independientemente
// de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de qeu el usuario no cumpla con las condiciones,
// se muestre un mensaje de error.
// Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una constraseña, la que tiene que tener
// por lo menos 6 caracteres. La contraseña tiene que ser case sensitive, por l oqeu se respetan las mayusculas y minusculas segun lo ingrese
// el usuario
// En caso de que la constraseña no cumpla con el requisito anterior, se debe mostrar un mensjae de error. De lo contrario, se debe mostrar un
// mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver)

/*2) LOGIN
Partiendo de la base del punto anterior , en caso de qeu se complete el registro, 
vamos a mostrarle un mensjae al usuario preguntandole Si desea iniciar sesion. En caso de qeu
el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y 
su contraseña. Si alguno de los datos ingresados no coinciden con los informados al momento 
del registro, le  vamos a mostrar un mensaje de error al usuario. Caso contrario, le mostraremos 
un mensaje  que diga el login fue exitoso. recordar el tema de normalizar los inputs 
(MAYUSCULA Y MINUSCULA) en caso de que sea necesario para poder hacer la comparacion 
contra los valores almacenados.
*/

/*3) EXTRA
Tomando los ejercicios anteriores, los vamos a modificar para qeu, en el caso de qeu cualquiera de las validaciones anteriores arroje un error 
el programa vuelva a pedir al usuario la oinfo solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
tocando el boton de cancelar al momento en qeu se le pide ingresar un dato o se le consutle si desea registrarse e inciar sesion  */

let username = "";
let password = "";
let registered = false;

alert("Bienvenido tontit@");
let response = confirm("¿Estas 100% seguro de que te queres registrar?");

//Registro
if (response) {
  do {
    username = prompt("Ingresa tu nombre de usuario:");
    if (username) {
      username = username.toLowerCase();

      console.log(username);

      if (username.length >= 3) {
        do {
          password = prompt("Ingresa tu constraseña:");
          console.log(password);
          if (password.length >= 6) {
            alert(`Te registraste exitosamente.
          Tu usuario es: ${username}
          Tu constraseña es: ${password}`);
            registered = true;
          } else {
            alert("¡¡¡¡SON 6 CARACTERES O +, SUCIO!!!!");
          }
        } while (password.length < 6);
      } else {
        alert("¡¡¡¡PUSISTE 3 CARACTERES O +, SUCIO!!!!");
      }
    }
  } while (username.length < 3);
} else {
  alert("Morite, sucio");
}

//Login
if (registered) {
  //a las variables solas, sean o no booleanos no hace falta poner === true, porque ya interpreta que es booleano y que es true. Si quiero poner que es false, le asigno un ! adelante del nombre de la variable
  response = confirm("¿Desea iniciar sesion?");
  let usernameLogin = "";
  let passwordLogin = "";

  if (response) {
    do {
      usernameLogin = prompt("Ingresa tu nombre de usuario:");
      if (usernameLogin) {
        usernameLogin = usernameLogin.toLowerCase();
        passwordLogin = prompt("Ingresa tu constraseña:");

        if (passwordLogin) {
          if (username === usernameLogin && password === passwordLogin) {
            alert("El login fue un exitoso, eres maravilloso.");
          } else {
            alert("El login no funco, tont@");
          }
        } else {
          response = false;
        }
      } else {
        response = false;
      }
    } while (
      (username !== usernameLogin || password !== passwordLogin) &&
      response
    );
  } else {
    alert("Si todavia no te moriste, es tu momento");
  }
}

//EXTRA
