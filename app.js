/*fetch("./navajas.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

//let container_navajas = document.querySelectorAll("div");

//console.log(container_navajas);*/

const imagen_navajas = [
  {
    imagen: "./images/navajas/CS3_Revolution-1-38-scaled-e1691510385915.jpg",
  },

  {
    imagen: "./images/navajas/NAVAJA-SMITH-CH156.jpg",
  },

  {
    imagen: "./images/navajas/navaja-smith-ch325.jpg",
  },

  {
    imagen: "./images/navajas/NAVAJA-SMITH-CK33.jpg",
  },

  {
    imagen: "./images/navajas/Navaja-SMITH-WESSON-CK400-1.jpg",
  },

  {
    imagen: "./images/navajas/Navaja-SMITH-WESSON-SWFR.jpg",
  },
  {
    imagen: "./images/navajas/CS3_Revolution-1-38-scaled-e1691510385915.jpg",
  },

  {
    imagen: "./images/navajas/NAVAJA-SMITH-CH156.jpg",
  },

  {
    imagen: "./images/navajas/navaja-smith-ch325.jpg",
  },

  {
    imagen: "./images/navajas/NAVAJA-SMITH-CK33.jpg",
  },

  {
    imagen: "./images/navajas/Navaja-SMITH-WESSON-CK400-1.jpg",
  },

  {
    imagen: "./images/navajas/Navaja-SMITH-WESSON-SWFR.jpg",
  },
];

const lista = document.querySelector("#lista");
const template = document.querySelector("#template").content;
//console.log(container_navajas);
const fragment = document.createDocumentFragment();

imagen_navajas.forEach((item) => {
  console.log(item);
  const imageElement = template.querySelector(".producto #imagen");
  imageElement.src = item.imagen;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
