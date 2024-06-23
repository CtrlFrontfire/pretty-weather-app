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

function formatDate(date) {
  let day = date.getDay();
  let year = date.getFullYear();
  let month = date.getMonth();
  let dateNow = date.getDate();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let formattedDay = days[day];
  let formattedMonth = months[month];
  return `${formattedDay} ${dateNow} ${formattedMonth} ${year}, ${hours}:${minutes}`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

let currentDateElement = document.querySelector("#weather-app-timestamp");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
