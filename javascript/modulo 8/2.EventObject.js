const selectColor = (event) => {
  console.log(event.target);
};

//lo que hace target es decirme "<div class="color red" id="red"></div>" el color
//no importa lo q siimporta es qeu cuando toco un cuadrado me devuleve eso.
//con target.id me devuelve el color directamente ej. red black green etc

const colorSquares = document.querySelectorAll('.color');
console.log(colorSquares);

colorSquares.forEach((square) => square.addEventListener('click', selectColor));
