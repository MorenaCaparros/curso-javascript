// FALSY: 0, null,, undefined, NaN, "", ``, (las comillas sinespacio en el medio) false
console.log(Boolean(false)); // falsy
console.log(Boolean(null)); // falsy
console.log(Boolean(!!0)); // falsy
console.log(Boolean(!!"")); // falsy
console.log(Boolean("Hola Mundo")); // truthy
console.log(Boolean(40)); // truthy
console.log(Boolean(!![])); // truthy

// Esto sirve para que cuando por ejemplo:

const firstName = prompt("Ingresa tu nombre");
// si yo no pongo nada y pongo directamente cancelar, me da error en el console
//pero lo que puedo hacer es que como se que las comillas, undefined y todo eso da false
// pongo
if (firstName) {
  //ya se aca que me va a dar verdadero
  console.log(firstName);
} else {
  console.log(`Esto es falsy`, firstName);
}
