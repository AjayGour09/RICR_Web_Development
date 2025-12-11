function Submit() {
  const nm = document.getElementById("Name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const dob = document.getElementById("date").value.trim();

  if(!/^[\A-Za-z ]+$/.test)
  const Data = {
    Name: nm,
    Email: email,
    number: number,
    DOB: dob,
  };

  console.log(Data);
}
