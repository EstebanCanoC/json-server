import { getServerURL } from "./task1.js";

import fetch from "node-fetch";

export async function listUsers() {
  // Haz una solicitud HTTP GET al servidor para obtener la lista de usuarios
  const url = getServerURL();
  const response = await fetch(url+"/users");

  // Convierte la respuesta en un objeto JavaScript, en este caso, un array de usuarios
  const users = await response.json();

  // Recorre el array de usuarios y crea un string formateado para cada uno
  const formattedUsers = users
    .map(
      (user) =>
        `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
    )
    .join(",\n");

  // Imprime en la consola el array de usuarios formateado como un string
  return console.log(`[\n${formattedUsers}\n]`);
}
// import { getServerURL } from "./task1.js";

// export async function listUsers() {
//   fetch(getServerURL)
//     .then((response) => response.json())// convertir a json
//     .then((json) => console.log(json)); //imprimir los datos en la consola
// }
// // Solicitud GET (Request)
