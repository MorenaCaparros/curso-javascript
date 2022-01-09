//EJERCICIO
//Utilizando el listado de
// repositorios que nos da la API de GITHUB (https://api.github.com)
// tomar el primer repositorio del listado y
// realizar las siguientes tareas:

// 1) Modificar el texto 'Nombre' por el nombre de usuario
// 2) Agregar el avatar del usuario
// 3) Insertar un listado de links a sus 5 primeros
// repositorios.

const baseURL = `https://api.github.com`;

const getPublicRepositories = async () => {
  const response = await fetch(`${baseURL}/repositories`);

  const jsonResponse = await response.json();
  //   console.log(jsonResponse);
  return jsonResponse;
};

//el profe para hacerlo mas simple en ves de hacer uan funcion para usar el primer elemento del array
//puso jsonResponse[0] eso me devuelve el primer elemento
// console.log(getPublicRepositories());
const getFirstElement = (array) => {
  return array[0];
};

const reName = (repo) => {
  console.log(repo);
  const login = repo.owner.login;
  const name = document.querySelector('.username');
  name.textContent = login;
};

const addAvatar = (repo) => {
  const avatar = repo.owner.avatar_url;
  const image = document.querySelector('#avatar');
  image.src = avatar;
};

//el profe lo hizo asi:
// const baseUrl = "https://api.github.com";

// const getPublicRepositories = async () => {
//   const response = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await response.json();
//   return jsonResponse[0];
// };

// const getRepositoriesFromOwner = async (reposEndpoint) => {
//   const reposResponse = await fetch(reposEndpoint);
//   const jsonReposResponse = await reposResponse.json();
//   const responseRepos = jsonReposResponse.slice(0, 5); lo que hizo aca es cortar el Arrat del 0 al 5
// porqeu solo se requieren los 5 primeros
//   return responseRepos;
// };

// const editProfile = async () => {
//   const profileData = await getPublicRepositories();
//   const avatarUrl = profileData.owner.avatar_url;
//   const name = profileData.owner.login;
//   const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

//   const userAvatar = document.querySelector("#avatar");
//   const nameNode = document.querySelector("h1");

//   nameNode.textContent = name;
//   userAvatar.src = avatarUrl;

const getRepos = async (repo) => {
  const repositories = repo.owner.repos_url;
  const allRepos = await getDataFromApi(repositories);
  allRepos.length = 5;
  // console.log(allRepos);

  allRepos.map((item) => {
    const repoNode = document.createElement('a');
    const listNode = document.querySelector('#repos-list');
    repoNode.textContent = item.html_url;
    repoNode.href = item.html_url;

    listNode.appendChild(repoNode);
  });
};

const getDataFromApi = async (Api) => {
  const response = await fetch(Api);
  return await response.json();
};

const firstRepos = getPublicRepositories().then((repo) => {
  const first = getFirstElement(repo);
  reName(first);
  addAvatar(first);
  getRepos(first);
});

editProfile();
