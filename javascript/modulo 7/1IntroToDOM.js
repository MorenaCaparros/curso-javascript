//DOM: significa Document Object Model
//es una estructura de objetos o de nodos que es generada por nuestro
//navegador cuando cargamos un doc HTML
//que son los nodos: son los elementos de nuestro arbol, los contenidos de nuestra pagina web\

// Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/
// Si se copia un html en ese link se ve #text  uqe vendrian a ser los hijos y los padres
//3 maneras de acceder a estos nodos:
// 1. por el nombre de la etiqueta ej. div
// 2. Por el nombre de la clase o la id

//Acceder a un nodo
//Por el tag name
const header = document.getElementsByTagName('header');

console.log(header);

//2) Por el nombre de la clase (Si hubiera mas de una con la misma clase van a aparecer ambas como 0 1 2 etc)
const container = document.getElementsByClassName('container');

console.log(container);

//3) Por ID

const inicio = document.getElementById('inicio');

console.log(inicio);

//4) QuerySelector (se uede usar para llamar a una id a una clase y a un tag name)
//el queryselector va a devolver solo el primero que encuentre si queremos que devuelva todos
//hay qeu usar queryselectorall

const article = document.querySelector('article');

console.log(article);

const clases = document.querySelector('.container');

console.log(clases);

const todasLasClases = document.querySelectorAll('.container');

const ID = document.querySelector('#inicio');

console.log(ID);
