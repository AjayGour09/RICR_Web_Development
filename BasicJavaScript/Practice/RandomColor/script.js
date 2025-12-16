const RandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;
const startchangecolor = function () {
  const changebgCoolor = function () {
    document.body.style.backgroundColor = RandomColor();
  };

  intervalid = setInterval(changebgCoolor, 1000);
};
const stopchangecolor = function () {
  clearInterval(intervalid);
};

document.querySelector("#Start").addEventListener("click", startchangecolor);
document.querySelector("#Stop").addEventListener("click", stopchangecolor);
