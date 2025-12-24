// const newobj = Object.getOwnPropertyDescriptor(Math , "PI");
// console.log(newobj); --it's not part of code 

async function GetRandomUser() {
  try {
    const api = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    );
    const result =await api.json();
    const data = result.data;
    const userData = document.getElementById("Data");
    userData.innerHTML = `
         <div class="ms-5 mt-5 w-25 border border-primary rounded-1">
          <div class="border border-danger m-2"><img src=${data.picture.large} alt="" class="image" /></div>
          <div>
            <p class="ms-4">name :-${data.name.first}</p>
            <p class="ms-4">gender -:${data.gender}</p>
            <p class="ms-4">Country -:${data.location.country}</p>
            <p class="ms-4">Email -:${data.email}</p>
            <p class="ms-4">AGE : ${data.dob.age}</p>
            <p class="ms-4">Phone :-${data.phone}</p>
          </div>
        </div>

        `;
  } catch (error) {
    console.log(error);
  }
}
GetRandomUser();
