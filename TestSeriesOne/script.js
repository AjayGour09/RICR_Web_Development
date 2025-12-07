function SubmitForm() {
  const personName = document.getElementById("personName").value;
  const clg = document.getElementById("college").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("qualification").value;
  const gender = document.getElementById("gender").value;
  const branch = document.getElementById("branch").value;
  const sem = document.getElementById("sem").value;
  const FullStack = document.getElementById("FullStack").value;
  const DataScience = document.getElementById("DataScience").value;
  const Data = document.getElementById("Data").value;
  const Business = document.getElementById("Business").value;
  const java = document.getElementById("java").value;
  const Python = document.getElementById("Python").value;
  const c = document.getElementById("c").value;
  const Other = document.getElementById("Other").value;

  alert(
    "Registration Completed ! Thank you for Enrolling...."
  );
  console.log(personName);
  console.log(email);
  console.log(qualification);
  console.log(gender);
  console.log(sem);
  console.log(clg);
  console.log(branch);
  console.log(FullStack);
  console.log(DataScience);
  console.log(Data);
  console.log(Business);
  console.log(java);
  console.log(Python);
  console.log(c);
  console.log(Other);

  document.getElementById("personName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("clg").value = "";
  document.getElementById("sem").value ="";
  document.getElementById("branch").value ="";
  document.getElementById("FullStack").value = "";
  document.getElementById("DataScience").value = "";
  document.getElementById("Data").value = "";
  document.getElementById("Business").value = "";
  document.getElementById("java").value = "";
  document.getElementById("Python").value = "";
  document.getElementById("c").value = "";
  document.getElementById("Other").value = "";
  document.getElementById("gender").value = "";
}
