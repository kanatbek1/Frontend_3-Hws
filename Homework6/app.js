const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);

      const dataContainer = document.querySelector(".dataContainer");

      data.forEach((item) => {
        const { Img, price, description } = item;

        const card = document.createElement("div");

        card.innerHTML = `
      <img src="${Img}" alt="img">
      <p>Price: ${price}</p>
      <p>description: ${description}</p> 
      `;
        card.style.color = "red";
        card.style.fontSize = "20px";

        dataContainer.appendChild(card);
      });
    } else if (xhr.readyState === 4 && xhr.status === 400) {
      console.log("error: " + xhr.status);
    }
  };
  xhr.send();
};
getData();
