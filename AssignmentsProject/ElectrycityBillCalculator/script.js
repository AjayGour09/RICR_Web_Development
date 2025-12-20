function Result() {
  let units = document.getElementById("units").value.trim();
  console.log(units);

  let billAmount = 0;
  let totalAmount = 0;
  if (units === "") {
    alert("Please enter the units consumed");
    return;
  } else if (units <= 0) {
    alert("Please enter a valid number of units");
    return;
  } else if (units <= 50) {
    billAmount = units * 0.5;
  } else if ((units) => 51 || units <= 200) {
    billAmount = units * 0.75;
  } else if ((units) => 201 || units <= 450) {
    billAmount = units * 1.2;
  } else {
    billAmount = units * 1.5;
  }
  totalAmount = (20/100)*billAmount;
  billAmount = totalAmount + billAmount;

  document.getElementById(
    "result"
  ).innerHTML = `Your ElectriCity Bill is -->  ${billAmount}`;
  document.getElementById("units").value = "";
}
