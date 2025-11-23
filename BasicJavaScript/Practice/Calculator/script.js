function Input(char) {
  //
  if (char === "=") {
  const exp =  document.getElementById("data").value;
  document.getElementById("data").value = eval(exp)
  } else if (char === "C") {
    document.getElementById("data").value = "";
  } else {
    let exp = document.getElementById("data").value;
    exp = exp + char;
    document.getElementById("data").value = exp;
  }
}
