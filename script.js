const celsiusInputEl = document.getElementById("celsius");
const fahrenheitInputEl = document.getElementById("fahrenheit");
const kelvinInputEl = document.getElementById("kelvin");

window.addEventListener("input", (event) => {
  showTemp(event);
});

function showTemp() {
  if (event.target.id === "celsius" && event.target.value !== "") {
    fahrenheitInputEl.value = (+event.target.value * (9 / 5) + 32).toFixed(2);
    kelvinInputEl.value = (+event.target.value + 273.15).toFixed(2);
  } else if (event.target.id === "fahrenheit" && event.target.value !== "") {
    celsiusInputEl.value = ((+event.target.value - 32) * (5 / 9)).toFixed(2);
    kelvinInputEl.value = (
      (+event.target.value - 32) * (5 / 9) +
      273.15
    ).toFixed(2);
  } else if (event.target.id === "kelvin" && event.target.value !== "") {
    celsiusInputEl.value = (+event.target.value - 273.15).toFixed(2);
    fahrenheitInputEl.value = (
      (+event.target.value - 273.15) * 1.8 +
      32
    ).toFixed(2);
  } else {
    celsiusInputEl.value = "";
    fahrenheitInputEl.value = "";
    kelvinInputEl.value = "";
  }
}
