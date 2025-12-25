async function GetJoke() {
  try {
    const JokeApi = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1"
    );
    const data = await JokeApi.json();
    const realData = await data

    document.getElementById("jokeDisplay").innerHTML = `
            <div>
                <h3>${realData.data.data[0].content}</h3>
            </div>
    `;
  } catch (error) {
    console.log(error);
  }
}
GetJoke();
