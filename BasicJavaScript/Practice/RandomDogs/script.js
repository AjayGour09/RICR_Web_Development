async function GetDogsData() {
    try {
        const DogApi = await fetch("https://api.freeapi.app/api/v1/public/dogs/dog/random");
        const DogsData = await DogApi.json();
        document.getElementById("dogsData").innerHTML =`<div
      id="container"
      class="border border-info rounded rounded-3 shadow mt-5 ms-5"
      style="width: 350px; height: 480px"
    >
      <div
        class="border border-info rounded rounded-3 shadow m-3"
        style="width: 320px; height: 250px"
      >
        <img
          src="${DogsData.data.image.url}"
          alt=""
          style="width: 320px; height: 250px"
        />
      </div>
      <div class="fs-6 ps-3"><b>Pet Name -> </b> ${DogsData.data.name}</div>
      <div class="fs-6 ps-3"><b>weight -> </b> ${DogsData.data.weight.metric}</div>
      <div class="fs-6 ps-3"><b>height -> </b> ${DogsData.data.height.imperial}</div>
       <div class="fs-6 ps-3"><b>breed_group -> </b>${DogsData.data.breed_group}</div>
        <div class="fs-6 ps-3"><b>life_span -> </b> ${DogsData.data.life_span}</div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary mt-3" onclick="GetDogsData()">Next Dog</button>
        </div>
    </div>
`
        
    } catch (error) {
        console.log(error);
        
    }
}
GetDogsData();