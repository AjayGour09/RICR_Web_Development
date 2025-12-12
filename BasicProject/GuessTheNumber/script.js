function Submit() {
  const number = document.getElementById("number").value;
  const GuessNumber = Math.floor(Math.random() * 10);

  if (GuessNumber > number) alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  else if (GuessNumber < number) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    alert("congratulation You Guess The Number");
  }
  document.getElementById("number").value = "";
}
