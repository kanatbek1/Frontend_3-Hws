const getData = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {

      const dataContainer = document.querySelector(".dataContainer");
      data.forEach((item) => {
        const { Img, price, description } = item;
        const card = document.createElement("div");

        card.innerHTML = `<img src="${Img}" alt="img">
        <p>Price: ${price}</p> 
        <p>description: ${description}</p> `;
        
        card.style.color = "red";
        card.style.fontSize = "20px";
        dataContainer.appendChild(card);
      });
      console.log(data);
    })
    .catch((error) => {
      console.log("error:" + error);
    });
};

getData();




