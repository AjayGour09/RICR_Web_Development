function PlaceOrder() {
  const name = document.getElementById("fname").value;
  const lastname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const address = document.getElementById("address").value;
  const address2 = document.getElementById("address2").value;
  const zip = document.getElementById("zip").value;
  const region = document.getElementById("region").value;
  const country = document.getElementById("country").value;
  const pizza = document.getElementById("pizza").value;
  const pizzaSize = document.getElementById("pizzaSize").value;
  const pizzaQuantity = document.getElementById("pizzaQuantity").value;

  alert("Order Confirm please Wait some Time....");
  console.log(name);
  console.log(lastname);
  console.log(email);
  console.log(number);
  console.log(address);
  console.log(address2);
  console.log(region);
  console.log(zip);
  console.log(country);
  console.log(pizza);
  console.log(pizzaSize);
  console.log(pizzaQuantity);

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("address").value = "";
  document.getElementById("address2").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("region").value = "";
  document.getElementById("country").value = "";
  document.getElementById("pizza").value = "";
  document.getElementById("pizzaSize").value = "";
  document.getElementById("pizzaQuantity").value = "";
}
