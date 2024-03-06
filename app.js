fetch("./navajas.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

let container_navajas = document.querySelectorAll("div");

console.log(container_navajas);
