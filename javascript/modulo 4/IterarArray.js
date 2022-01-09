//Iterar sobre un Array
const miArray = ['More', 'Juan', 'Pepe', 'Lala', 'BuLma'];

//como siempre se cual es la longitud de los array usando LENGHT hago
for (let i = 0; 1 < miArray.length; i++) {
  console.log(miArray[1]); //lo que hace es devolver todos los nombres
}

for (let i = 0; 1 < miArray.length; i++) {
  miArray[1] = 'el mismo nombre'; //lo que hace es devolver "el mismo nombre" siempre porque yo cambie a todo lo qeu estaba en miArray por eso
}

// forma mas sencilla es
//Iterar sobre un array con forEach. El forEach no te retorna nada en cambio MAP si

const variable /* puede no definirse la variable */ = miArray.forEach(
  (item, index) => {
    console.log(index); //se van a ver los numeros
    console.log(item); //nombre
  }
);

console.log(variable);

//SIN MAP
const newArray = [];

miArray.forEach((name) => {
  const newString = `Nombre: ${name}`;
  console.log(newString);
  newArray.push(newString);
});

console.log(newArray); //lo que va a quedar es "Nombre: More"
// Nombre: Juan
// Nombre: Pepe ..." y sigue"
//CON MAP
const newArray = miArray.map((name) => `Nombre: ${name}`); //esto es con return implicito sino tengo que poner{ y return `Nombre: ${name}`}
//cuando pongo el punto . lo qeu hago es decir
//entra aca al primero itera y busca el segundo elemento. para poder usar Map, tiene que ser un array.
//si yo tuviera primero un objeto entonces haria "(el nombre del objeto).(el nombre del array).map( dentro de aca hago lo mismo uso el map)"
