const loginbtn = document.getElementById("loginbtn");
const passbtn = document.getElementById("password");
const em = document.getElementById("email").value;
console.log(em);

function login() {
  // console.log("Login button clicked");
  const passbtn = document.getElementById("password").value;
  const em = document.getElementById("email").value;
  console.log(em);
  console.log(passbtn);
  alert("login now");

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
function registration (){
    console.log();
    
} 