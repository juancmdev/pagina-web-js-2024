const mostrar = document.querySelector("#mostrar");

fetch("./navajas.json")
  // Exito
  .then((response) => response.json()) // convertir a json
  .then((data) => resFetch(data)) //imprimir los datos en la consola
  .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

const resFetch = (res) => {
  res.forEach((item) => {
    const itemMostrar = document.createElement("h4");
    itemMostrar.textContent = item.imagen;
    mostrar.appendChild(itemMostrar);
  });
};
