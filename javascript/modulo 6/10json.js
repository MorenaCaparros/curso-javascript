//JSON.org es una pagina para googlear que es json y para que se peude usar
//puede darse que no tengamos uqe usar json sino por ej: response.text
//json si bien esta inspirado en javascript no es javascript, es independiente

const body = {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
};

//console.log(typeof body);

//convertir a json

const parsedBody = JSON.stringify(body);

console.log(body); //{id: 1, title: 'foo', body: 'bar', userId: 1}
// body: "bar"
// id: 1
// title: "foo"
// userId: 1
// [[Prototype]]: Object
console.log(parsedBody); //{"id":1,"title":"foo","body":"bar","userId":1} si yo hago
//typeof de parsedBody me va a dar que es un string pq lo convierte a string

//se convierte cuando yo tengo algo en javascript como es lo que seria BODY y lo quiero
//converitr a JSON para mandarlo

//convertir JSON a JS

const bodyToJS = JSON.parse(parsedBody); //{id: 1, title: 'foo', body: 'bar', userId: 1}

console.log(bodyToJS);
