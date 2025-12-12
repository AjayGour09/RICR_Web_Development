function SubmitData() {
  const nm = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("mobilenumber").value.trim();
  const dob = document.getElementById("date").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const percentage = document.getElementById("percentage").value.trim();
  const course = document.getElementById("course").value.trim();
  const BatchTiming = document.getElementById("Timing").value.trim();
  const Residentialaddress = document
    .getElementById("Residentialaddress")
    .value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const guardianname = document.getElementById("guardian").value.trim();
  const guardiannumber = document.getElementById("guardiannumber").value.trim();
  const aboutUs = document.getElementById("about").value.trim();
  const Requirements = document.getElementById("Requirements").value.trim();

  const DataPacket = {
    name: nm,
    email: email,
    number: number,
    dob: dob,
    qualification: qualification,
    percentage: percentage,
    course: course,
    BatchTiming: BatchTiming,
    Residentialaddress: Residentialaddress,
    city: city,
    pin: pin,
    guardianname: guardianname,
    guardiannumber: guardiannumber,
    aboutUs: aboutUs,
    Requirements: Requirements,
  };
  console.log(DataPacket);
}
