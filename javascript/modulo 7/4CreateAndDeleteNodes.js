//Eliminar un nodo
//remove()

// const repos = document.querySelector('#repos');

// repos.remove();

//Crear Nodo
//document.createElement()

const reposNode = document.createElement('h2');
//crea el h2 pero vacio

reposNode.textContent = 'Repos';

console.log(reposNode);

//hasta aca no esta incoprporado al html
//para eso se usa
//appendChild
//agrega como un hijo entonces se necesita el nodo padre. Lo unico que se agrega AL FINAL

const parentAside = document.querySelector('header');

parentAside.appendChild(reposNode);

//en inspeccionar y elements se ve el html completo
//lo que agregamos

//Si quiero que se agregue antes
//before

// const inicio = document.querySelector('#inicio');

// inicio.before(reposNode);

//lo uqe hace es ponerse antes que el nodo con el id o class que le pusimos

const inicio = document.querySelector('#inicio');

inicio.after(reposNode);

reposNode.classList.add('red-Text');

//para agregar mas de uno por ej tambien text ademas de red text se hace
// ("text", "red-Text")

//link de propiedades y metodos
//https://developer.mozilla.org/es/docs/Web/api/Element

//https://developer.mozilla.org/es/docs/Web/API/Document
