//Fetch
//ir a buscar un recurso fuera de nuestro codigo, por ej necesitamos ir a buscar data de nuestros usuarios
//afuera de nuestro codigo con la logica del asincronismo porque no queremos
//quedarnos esperando a que el servidor responda que nos quede cargando, entonces no podemos dejar al usuario esperando hasta que se resuelva esa logica

const getDataFromApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // si le pongo el await se resuelve, porque hace que sea sincronico algo que era asincronico
  console.log(await response.json());
};
//para qwue yo lo pueda leer o usar necesito pasarlo a un formato que lo lea javascript que es
//json y como json tambien es una promesa necesito poner await
//lo que hago con el await es decir dame una respuesta, pasala a json
//cuando lo tengas pasalo al console.log

// lo que me devolvio fue {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

getDataFromApi();

const getDataFromApiTwo = async () => {
  try {
    const response = await fetch(
      'https://jsonasdplaceholder.typicode.com/todos/1'
    ); //aca da error "Failed to fetch   at getDataFromApiTwo"
    const jsonResponse = await response.json(); // son como dos formas de hacer lo mismo, esa y esta = console.log(await response.json());
    return jsonResponse;
  } catch (error) {
    console.log('error =>', error);
  }
};
console.log(getDataFromApi().then((response) => console.log(response))); // esto lo pones si usas console.log en la funcioon =getDataFromApiTwo();
//necesito encadenarlo ponerle el .then y demas porque sino no voy a llamar a la funcion de adentro
