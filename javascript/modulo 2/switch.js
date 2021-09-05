//SWITCH: evaluar una expresion, y se establecen distintos casos y uno de defecto
//que es el que si no es ninguno de esos casos, toma el de defecto.

const cars = prompt("Ingresa tu auto");

switch (cars.toUpperCase()) {
  case "FORD":
    console.log("Alto autito");
    alert("Alto autito");
    break;

  case "BMW":
    console.log("Sos re careta");
    alert("Sos re careta");
    break;

  case "FIAT":
    console.log("Autazo de fierro");
    alert("Autazo de fierro");
    break;

  default:
    console.log("Lo que tenes no sirve, comprate otro");
    alert("Lo que tenes no sirve, comprate otro");
    break;
}
