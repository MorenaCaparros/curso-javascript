//EJERCICIOS

/* Utilizando eventos, agregar algun efecto de hover a la 
imagen (puede ser algun cambio en la forma, un blur, 
animacion, etc). NO SE PUEDE USAR EL SELECTOR 
:hover de CSS



2) Agregar un evento al boton shuffle, de forma tal que
cuando se haha click en el mismo, se actualice el perfil con
informacion de un usuario random selecionado de la lista
de usuarios que provee el endpoint de Github.
Pista, para crear la logica de seleccion random, pueden
investigar sobre el metodo Math.random())*/

const effect = (event) => {
  const image = document.querySelector(`#${event.target.id}`);
  image.classList.toggle('filter');
};

const imageEffect = document.querySelector('#avatar');

imageEffect.addEventListener('click', effect);

//2)
const baseURL = `https://api.github.com`;

const getPublicRepositories = async () => {
  const response = await fetch(`${baseURL}/repositories`);

  const jsonResponse = await response.json();
  //   console.log(jsonResponse);
  return jsonResponse;
};

const reName = (repo) => {
  const login = repo.owner.login;
  const name = document.querySelector('.username');
  name.textContent = login;
};

const addAvatar = (repo) => {
  const avatar = repo.owner.avatar_url;
  const image = document.querySelector('#avatar');
  image.src = avatar;
};

const getRepos = async (repo) => {
  const repositories = repo.owner.repos_url;
  const allRepos = await getDataFromApi(repositories);
  allRepos.length = 5;

  const listNode = document.querySelector('#repos-list');
  listNode.textContent = '';

  allRepos.map((item) => {
    const repoNode = document.createElement('a');

    repoNode.textContent = item.html_url;
    repoNode.href = item.html_url;

    listNode.appendChild(repoNode);
  });
};

const min = 0;
const max = 100;

//cuando quiero que un numero se redondee a un eentero uso math.floor o math.ceil y adentro ( math.random)
//sirve apra redondear cualquier numero

const getRandomElement = (array) => {
  const x = Math.floor(Math.random() * (max - min) + min);
  return array[x];
};

const getDataFromApi = async (Api) => {
  const response = await fetch(Api);
  return await response.json();
};

const main = () => {
  getPublicRepositories().then(async (repo) => {
    const random = getRandomElement(repo);
    reName(random);
    addAvatar(random);
    await getRepos(random);
    // refreshButton(random);
  });
};

const button = document.querySelector('button');
button.addEventListener('click', main);

main();

//lo que hizo el profe

// const baseUrl = "https://api.github.com";

// const getRandomProfile = (profileList) => {
//   const randomIndex = Math.ceil(Math.random() * profileList.length - 1);
//   const randomProfile = profileList[randomIndex];
//   return randomProfile;
// };

// const getPublicRepositories = async () => {
//   const response = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await response.json();

//   const randomProfile = getRandomProfile(jsonResponse);

//   return randomProfile;
// };

// const getRepositoriesFromOwner = async (reposEndpoint) => {
//   const reposResponse = await fetch(reposEndpoint);
//   const jsonReposResponse = await reposResponse.json();
//   const responseRepos = jsonReposResponse.slice(0, 5);
//   return responseRepos;
// };

// const editProfile = async () => {
//   const profileData = await getPublicRepositories();
//   const avatarUrl = profileData.owner.avatar_url;
//   const name = profileData.owner.login;
//   const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

//   const userAvatar = document.querySelector("#avatar");
//   const nameNode = document.querySelector("h1");
//   const listNode = document.querySelector("#repos-list");
//   listNode.innerHTML = "";

//   nameNode.textContent = name;
//   userAvatar.src = avatarUrl;

//   userRepos.forEach((repo) => {
//     const repoNode = document.createElement("a");
//     repoNode.textContent = repo.html_url;
//     repoNode.href = repo.html_url;

//     listNode.appendChild(repoNode);
//   });
// };

// editProfile();

// const userAvatar = document.querySelector("#avatar");

// const changeImageRadius = () => {
//   // const isCircle = userAvatar.classList.contains("circle-avatar");

//   // if (isCircle) {
//   //   userAvatar.classList.remove("circle-avatar");
//   //   userAvatar.classList.add("square-avatar");
//   // } else {
//   //   userAvatar.classList.add("circle-avatar");
//   //   userAvatar.classList.remove("square-avatar");
//   // }

//   userAvatar.classList.toggle("circle-avatar");
//   userAvatar.classList.toggle("square-avatar");
// };

// userAvatar.addEventListener("mouseenter", changeImageRadius);
// userAvatar.addEventListener("mouseleave", changeImageRadius);

// const shuffleBtn = document.querySelector("button");

// shuffleBtn.addEventListener("click", editProfile);
