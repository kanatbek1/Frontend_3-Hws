const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Osh&appid=e417df62e04d3b1b111abeab19cea714";

const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");

const h1 = block1.querySelector("h1");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    h1.textContent = data.name;

    const temperature = data.main.temp;
    const cloudiness = data.clouds.all;
    const windSpeed = data.wind.speed;

    let block2Content = `
      <p>Temperature: ${temperature} K</p>
      <p>Cloudiness: ${cloudiness} %</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
      
    `;

    if (temperature >= 273.15 && temperature <= 283.15) {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const imgCold = data[0].imgCold;
          block2Content += `<img src="${imgCold}" alt="Cold">`;
          block2.innerHTML = block2Content;
        });
    } else if (temperature > 283.15 && temperature <= 293.15) {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const imgWarm = data[1].imgWarm;
          block2Content += `<img src="${imgWarm}" alt="Warm">`;
          block2.innerHTML = block2Content;
        });
    } else if (temperature > 303.15) {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const imgHeat = data[2].imgHeat;
          block2Content += `<img src="${imgHeat}" alt="Heat">`;
          block2.innerHTML = block2Content;
        });
    }
  })
  .catch((error) => {
    console.log("Возникла ошибка:", error);
  });
