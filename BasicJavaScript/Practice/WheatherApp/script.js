async function GetWheather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await GetGeoLocation(city);

  const res =await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbca23b28e7d1318b71e1e700cc3895c`
  );
  const data = await res.json();
  document.getElementById("WheatherData").innerHTML = ` <div>
            <p>Temprature :${(data.main.temp - 273.14).toFixed(2)}C.</p>
            <p>Humidity :${data.main.humidity}%</p>
            <p>Desccription :${data.weather[0].description}</p>
          </div>
          <div>
             <img class="w-50" src=" https://openweathermap.org/img/wn/${
               data.weather[0].icon
             }@4x.png" alt="weather icon">
          </div>`;
}

async function GetGeoLocation(city) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=dbca23b28e7d1318b71e1e700cc3895c`
  );
  const data = await res.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
}
