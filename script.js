const apiKey = "b1415ca85dac7f3bd1be7d1867c108bb";
const search = document.querySelector("#searchBtn");
const temp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const weatherInfo = document.querySelector("#weatherInfo");
const errorMsg = document.querySelector("#errorMsg");

search.addEventListener("click", () => {
  errorMsg.classList.add("d-none");
  weatherInfo.classList.add("d-none");

  let city = document.querySelector("#cityInput").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("City not found");
      }
      return res.json();
    })
    .then((data) => {
      temp.textContent = (data.main.temp - 273.15).toFixed(1);
      humidity.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;
      weatherInfo.classList.remove("d-none");
    })
    .catch(err =>{
      errorMsg.classList.remove("d-none");
    });
});
