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

const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector('#selected-color');
  strongTag.textContent = paletteColors[selectedColor];
};

const paintSquare = (event) => {
  if (!selectedColor) return;

  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `painterBlock ${selectedColor}`;
};

const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

const resetGrid = () => {
  gridSquares.forEach((square) => (square.className = 'painterBlock'));
  selectedColor = null;
  const strongTag = document.querySelector('#selected-color');
  strongTag.textContent = '';
};

//con esto lo que hicimos es volver la clase a su estado original y asi aparece borrado el color
//lo que hay en la grilla
//con selectedColor = null lo que hacemos es que sacarle la seleccion de color y qeu no pinte una vez que pusimos reset
//volvi a poner el mismo const porque esta dentro de una variable entonces no lo puedo reutilizar de la anterior
//lo que hago es dejarlo con un string vacio para qeu no ponga nada en el "el color seleccionado es "

const colorSquares = document.querySelectorAll('.color');
console.log(colorSquares);

colorSquares.forEach((square) => square.addEventListener('click', selectColor));

const gridSquares = document.querySelectorAll('.painterBlock');
gridSquares.forEach((square) => square.addEventListener('click', paintSquare));

gridSquares.forEach((square) =>
  square.addEventListener('mousemove', paintSquareOnMove)
);

//lo que voy a hacer aca es poner el boton de reset

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetGrid);
