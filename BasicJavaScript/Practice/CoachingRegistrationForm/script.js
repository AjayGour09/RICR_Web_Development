function Submit() {
  // console.log("Clicked");
  const batch = document.querySelectorAll("input[name='batch']:checked");

  let salectedBatchTiming = [];
  batch.forEach((element) => {
    salectedBatchTiming.push(element.value);
  });
  console.log(salectedBatchTiming);

  const selectedTiming = document.querySelector(
    "input[name ='Timing']:checked"
  ).value;
  console.log(selectedTiming);
}
