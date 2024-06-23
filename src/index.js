function handleSearch(event) {
  event.preventDefault();
  let cityUserInput = document.querySelector("#search-input");

  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = cityUserInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
