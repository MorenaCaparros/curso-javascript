//Acceder y modificar texto
// para poder ver lo qeu tiene un det parte
const title = document.querySelector('.titulo');

console.log(title.textContent);
//El textcontent se pone para  ver que tiene adentro
//para cambiarlo hacemos :

title.textContent = 'Otra cosa';

//tabmien se puede usar .innerText q sirve para lo mismo

//Acceder y modificar src de Imagen

const hello = document.querySelector('#holaMundo');

// console.log(hello);

//aparece unknow porque nop tiene imagen asignada

hello.src =
  'https://png-1.vector.me/files/images/3/7/376735/scales_of_justice_colored_glassy_effect_derivative_preview';

// se pone src para luego entre comillas poner la url de la imagen

console.log(hello);

//Incorporar HTML mediante JS

const article = document.querySelector('#article');

// console.log(article.innerHTML);
//el innerHTML sirve para mostrar que hay adentro del html

article.innerHTML = `<article>  
          <h2 class="titulo dos">Inteligencia Artificial</h2>
          <p>Descripción de mi post 2</p>
          <img src="../imagenes/ia.jpg" width="400" />
          <p>
            Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!
          </p>
        </article>`;

console.log(article.outerHTML);
// esto devuelve todo completo
/* <a id="article"><article>  
          <h2 class="titulo dos">Inteligencia Artificial</h2>
          <p>Descripción de mi post 2</p>
          <img src="../imagenes/ia.jpg" width="400">
          <p>
            Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!
          </p>
        </article></a> */

console.log(article.innerHTML);
/* <article>  
          <h2 class="titulo dos">Inteligencia Artificial</h2>
          <p>Descripción de mi post 2</p>
          <img src="../imagenes/ia.jpg" width="400">
          <p>
            Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!
          </p>
        </article> */
