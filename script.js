// const triangle = document.querySelector(".triangle");
// const square = document.querySelector(".square");
// const circle = document.querySelector(".circle");
var triangle = document.querySelector(".triangle");
const button = document.querySelector(".button");

// function hidden(element) {
//   element.addEventListener("click", () => {
//     element.classList.add("hidden");
//   });
// }

// function visibility(element) {
//   element.classList.remove("hidden");
// }

// hidden(triangle);
// hidden(square);
// hidden(circle);

// button.addEventListener("click", () => {
//   visibility(triangle);
//   visibility(square);
//   visibility(circle);
// });


// añadimos un event listener a cada figura que detecte el clic del ratón
  triangle.addEventListener("click", function() {
    // cambiamos la propiedad "display" de la figura a "none" para hacerla desaparecer
    triangle.styles.display = "none";
  });
