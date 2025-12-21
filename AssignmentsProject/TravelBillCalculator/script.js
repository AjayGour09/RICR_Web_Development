function TravelBillCalculate() {
  const km = document.getElementById("number").value.trim();
  if (km == "" || km == isNaN() || km <= 0) {
    alert("Please enter a non-negative number of kilometres");
  } else if (km <= 10) {
    amount = km * 11;
  } else if (km >= 11) {
    amount = km * 10;
  }
  document.getElementById("Results").innerHTML = `Bill is ${amount}`;
  document.getElementById("number").value = "";
}
