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

//con buttons te dice que boton estas apretando si es 0 ninguno si es 1 es el izq y si es 2 el derecho.
// si lo mantenes apretado se va incrementando si no vuelve a 0

const colorSquares = document.querySelectorAll('.color');
console.log(colorSquares);

colorSquares.forEach((square) => square.addEventListener('click', selectColor));

const gridSquares = document.querySelectorAll('.painterBlock');
gridSquares.forEach((square) => square.addEventListener('click', paintSquare));

//ahora vamos a ver para mantener apretado el clic y pintar varios cuadrados
gridSquares.forEach((square) =>
  square.addEventListener('mousemove', paintSquareOnMove)
);
