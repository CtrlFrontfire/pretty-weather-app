function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather-app-temperature");
  let temperature = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = temperature;
}

function handleSearch(event) {
  event.preventDefault();
  let cityUserInput = document.querySelector("#search-input");
  let city = cityUserInput.value;

  let apiKey = "d32099afo5328e0346f4tb17db5ff833";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
