function Start() {
  console.log("game start");

  document.getElementById("playerOneDice").disabled = false;
  document.getElementById("playerTwoDice").disabled = false;
  document.getElementById("RestartBtn").disabled = false;
  document.getElementById("Startbtn").disabled = true;
}
function Restart() {
  window.location.reload();
}
function PlayerOne() {
    console.log("Player One start");
  let score = Number(document.getElementById("playerOneScore").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;
  // switch(DF){
  //   case:1
  // }
  if (DF === 6) {
    document.getElementById("playerOneDice").disabled = true;
    document.getElementById("playerTwoDice").disabled = false;
  }
  score = score + DF;
  console.log(DF);
  document.getElementById("playerOneScore").innerText = score;
}

function PlayerTwo() {
  console.log("Player Two start");
  let score = Number(document.getElementById("playerTwoScore").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;
  if (DF === 6) {
    document.getElementById("playerOneDice").disabled = false;
    document.getElementById("playerTwoDice").disabled = true;
  }
  score = score + DF;
  console.log(DF);
  document.getElementById("playerTwoScore").innerText = score;
}
