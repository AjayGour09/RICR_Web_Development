function CalculateSalary() {
  const BasicSalary = document.getElementById("number").value.trim();
  const HRA = 0.2 * BasicSalary;
  const DA = 0.1 * BasicSalary;
  const GrossSalay = parseInt(BasicSalary) + parseInt(DA) + parseInt(HRA);
  document.getElementById(
    "SalaryContainer"
  ).innerHTML = `The Salary is ${GrossSalay}`;
  document.getElementById("number").value = "";
}
