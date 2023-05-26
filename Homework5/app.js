const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");
const yuan = document.querySelector("#yuan");

const convert = (elem, target, target2, target3 ) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      
      if (elem === som) {
        target.value = (elem.value / data.usd).toFixed(2);
        target2.value = (elem.value / data.euro).toFixed(2);
        target3.value = (elem.value / data.yuan).toFixed(2);
      } else if (elem === usd) {
        target.value = (elem.value * data.usd).toFixed(2);
        target2.value = ((elem.value * data.usd) / data.euro).toFixed(2);
        target3.value = ((elem.value * data.usd) / data.yuan).toFixed(2);
      } else if (elem === euro) {
        target.value = (elem.value * data.euro).toFixed(2);
        target2.value = ((elem.value * data.euro) / data.usd).toFixed(2);
        target3.value = ((elem.value * data.euro) / data.yuan).toFixed(2);
      } else if (elem === yuan) {
        target.value = (elem.value * data.yuan).toFixed(2);
        target2.value = ((elem.value * data.yuan) / data.usd).toFixed(2);
        target3.value = ((elem.value * data.yuan) / data.euro).toFixed(2);
      }
      elem.value === "" && (target.value = "");
      elem.value === "" && (target2.value = "");
      elem.value === "" && (target3.value = "");
    });
  });
};
convert(som, usd, euro, yuan);