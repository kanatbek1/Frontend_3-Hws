// homework 1.1

const block = document.querySelector(".block");

let angle = -20;
let radius = 200;
const centerX = 200;
const centerY = 200;
const speed = 0.02;

const moveBlock = () => {
  angle += speed;

  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  block.style.left = x + "px";
  block.style.top = `${y}px`;

  setTimeout(moveBlock, 10);
};
block.addEventListener("click", () => {
  moveBlock();
});

// homework 1.2

const min = document.querySelector(".min");
const sek = document.querySelector(".sek");

let secondsPassed = 0;

const timer = setInterval(() => {
  secondsPassed++;

  if (secondsPassed / 60) {
    const minutes = Math.floor(secondsPassed / 60);
    if (minutes < 5) {
      min.textContent = `Минута прошла (${minutes} минут)`;
    } else {
      min.textContent = `Время вышло`;
      clearInterval(timer);
    }
  }
  console.log(`Секунда: ${secondsPassed}`);
  sek.textContent = `Секунда: ${secondsPassed}`;
}, 1000 );
