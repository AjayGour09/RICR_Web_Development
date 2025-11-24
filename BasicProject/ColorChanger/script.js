const body = document.querySelector("body");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
first.addEventListener("click", () => {
  body.style.backgroundColor = "aqua";
//  const bgcolor= document.querySelector("body".backgroundColor;
//  console.log(bgcolor);
 
});
second.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});
third.addEventListener("click", () => {
  body.style.backgroundColor = "pink";
});
fourth.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});
