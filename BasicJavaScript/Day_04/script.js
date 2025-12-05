function On() {
  document.getElementById("Gola").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("Gola").style.backgroundColor = "white";
}
// function Green() {
//   document.getElementById("Gola").style.backgroundColor = "green";
// }
// function Red() {
//   document.getElementById("Gola").style.backgroundColor = "red";
// }
// function Blue() {
//   document.getElementById("Gola").style.backgroundColor = "blue";
// }
// function Black() {
//   document.getElementById("Gola").style.backgroundColor = "black";
// }
const usercolor = document.getElementById("color");
usercolor.addEventListener("change", () => changedBulbColor(usercolor.value));
function changedBulbColor(color) {
  document.getElementById("Gola").style.backgroundColor = color;
}

function SB_Control() {
  const btn = document.getElementById("Sb_Btn");
  if (btn.innerText === "On") {
    document.getElementById("Sb_Btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("On");
  } else {
    document.getElementById("Sb_Btn").innerText ="On";
    document.getElementById("smartBulb").classList.remove("On");

  }
}
document.getElementById("c1").addEventListener("mouseenter",()=>{
  fillcolor("red");
})

function fillcolor(Color){
  console.log(Color);
  document.getElementById("Container").style.backgroundColor = Color;
}