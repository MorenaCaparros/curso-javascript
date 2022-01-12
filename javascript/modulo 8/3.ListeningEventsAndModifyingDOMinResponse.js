const paletteColors = {
  red: 'rojo',
  black: 'negro',
  white: 'blanco',
  yellow: 'amarillo',
  green: 'verde',
  brown: 'marron',
  purple: 'violeta',
  peru: 'peru',
};

let selectedColor;
//esto lo hago para tener la variable de manera global y poder usarla por fuera de la funcion

const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector('#selected-color');
  strongTag.textContent = paletteColors[selectedColor];
};
//lo que yo hice es poner entre [] a lo que es la key para que accediera y si cliqueo en un color uqe me salga en espanol

//con esto lo que hice es que cuando apriete alguno de los co.lores se vea ese id donde dice "el color seleccionado es (tal color)"
const paintSquare = (event) => {
  if (!selectedColor) return; //esto es para que si no se selecciona ningun color no devuelva undefined

  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `painterBlock ${selectedColor}`;
};

const colorSquares = document.querySelectorAll('.color');
console.log(colorSquares);

colorSquares.forEach((square) => square.addEventListener('click', selectColor));

const gridSquares = document.querySelectorAll('.painterBlock');
gridSquares.forEach((square) => square.addEventListener('click', paintSquare));
