function Registartion() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("ConfirmPassword").value;

  console.log(name);
  console.log(email);
  console.log(password);
  console.log(ConfirmPassword);

  alert("Form submitted successfully");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("ConfirmPassword").value = "";
}
