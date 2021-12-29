//Modificar estilos

// const container = document.querySelector('.container');

//className
// container.className = 'background-black';
// console.log(container.className);

//classname sobreescribe la que es ta por eso tenes que poner el otro tipo (ejemplo seria "background-black container") o de esta manera

//classList

// console.log(container.classList);
//mostrando con esto que valores tiene en este caso "DOMTokenList ['container', value: 'container']"
// container.classList.add('background-black');
// //con esto le agrego al valor que tiene algo mas que es lo que pongo entre ()

// //remover una clase
// container.classList.remove('background-black');

//si no se si esta o no una clase uso toggle, porque si la clase esta la saca, y si no esta la pone
// container.classList.toggle('background-black');
// container.classList.toggle('background-black');

//entonces pro ejemplo lo quiero agregar y sacar hago etsa funcion
const switchTheme = () => {
  const container = document.querySelector('.container');
  const textColor = document.querySelectorAll('.text');
  const ia = document.querySelector('#IA');

  ia.style.border = '2px solid black'; //de esta manera yo puedo modificar el estilo directamente, y haciendo console.log lo que permite es ver como se escriben esos estilos
  //porqeu no es igual en css qeu en JS para escribirlos
  container.classList.toggle('background-black');
  textColor.forEach((element) => element.classList.toggle('red-Text'));

  //puedo hacer un if para  que si container tiuene el fondo negro entonces que el borde sea blue
  if (container.classList.contains('background-black')) {
    ia.style.border = '2px solid blue';
  }
};

switchTheme(); //aca me aparece el negro
// switchTheme(); //aca lo saco entonces no tengo que andar poniendo todo el tiempo la funcion

// const textColor = document.querySelectorAll('.text');
// console.log(textColor);

//puedo meter todo en el switch
//ademas itero en el textColor porque lo que me devuelve es un array
