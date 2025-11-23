const usercolor = document.getElementById("color");
const userheading = document.getElementById("color2");
const userpara = document.getElementById("color3");

usercolor.addEventListener("change", () => changedcontainerColor(usercolor.value));
function  changedcontainerColor(color) {
  document.getElementById("container").style.backgroundColor = color;
}
userheading.addEventListener("change", () => changeHeading(userheading.value));
function  changeHeading(color) {
  document.getElementById("heading").style.color = color;
}
userpara.addEventListener("change", () => changeparaColor(userpara.value));
function  changeparaColor(color) {
  document.getElementById("para").style.color = color;
}