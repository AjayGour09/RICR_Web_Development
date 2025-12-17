let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("div was clicked");
});
ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked");
});
li.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("li was clicked");
});
