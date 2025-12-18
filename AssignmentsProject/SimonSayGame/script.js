let gameSeq = [];
let userSeq = [];
let btns = ["pink", "green", "yello", "Blue"];

let started = false;
let lavel = 0;
let p = document.querySelector("p");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classlist.add("flash");
  setTimeout(function () {
    btn.classlist.remove("flash");
  }, 1000);
}
function levelUp() {
  lavel++;
  p.innerHTML = `Level ${lavel}`;

  let rendomIdx = Math.floor(Math.random() * 3);
  let randomcolor = btns[rendomIdx];
  let randmbtn = document.querySelector(`.${randomcolor}`);
  btnFlash(randmbtn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}
