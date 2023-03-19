const square = document.querySelector(".square");
const circle = document.querySelector(".circle");
const triangle = document.querySelector(".triangle");
const button = document.querySelector(".button");

// añadimos un event listener para que detecte el clic del ratón
// cambiamos la propiedad "display" de la figura a "none" para hacerla desaparecer
triangle.addEventListener("click", function() {
  triangle.style.display = "none";
});
square.addEventListener("click", function() {
  square.style.display = "none";
});
circle.addEventListener("click", function() {
  circle.style.display = "none";
});



button.addEventListener("click", function() {
location.reload()
})