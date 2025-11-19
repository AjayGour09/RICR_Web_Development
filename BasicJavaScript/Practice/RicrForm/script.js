function SubmitForm() {
  const personName = document.getElementById("personName").value;
  const contactNumber = document.getElementById("contactNumber").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("qualification").value;
  const clg = document.getElementById("clg").value;
  const year = document.getElementById("year").value;
  const branch = document.getElementById("branch").value;
  const FullStack = document.getElementById("FullStack").value;
  const DataScience = document.getElementById("DataScience").value;
  const Data = document.getElementById("Data").value;
  const Business = document.getElementById("Business").value;
  const java = document.getElementById("java").value;
  const Python = document.getElementById("Python").value;
  const c = document.getElementById("c").value;
  const Other = document.getElementById("Other").value;
  const Source = document.getElementById("Source").value;
  const Executive = document.getElementById("Executive").value;

  alert(
    "Registration Completed ! Thank You for Registration we get Your Details Please wait some Time...."
  );
  console.log(personName);
  console.log(contactNumber);
  console.log(email);
  console.log(qualification);
  console.log(clg);
  console.log(year);
  console.log(branch);
  console.log(FullStack);
  console.log(DataScience);
  console.log(Data);
  console.log(Business);
  console.log(java);
  console.log(Python);
  console.log(c);
  console.log(Other);
  console.log(Source);
  console.log(Executive);

  document.getElementById("personName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("clg").value = "";
  document.getElementById("year").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("FullStack").value = "";
  document.getElementById("DataScience").value = "";
  document.getElementById("Data").value = "";
  document.getElementById("Business").value = "";
  document.getElementById("java").value = "";
  document.getElementById("Python").value = "";
  document.getElementById("c").value = "";
  document.getElementById("Other").value = "";
  document.getElementById("Source").value = "";
  document.getElementById("Executive").value = "";
}

