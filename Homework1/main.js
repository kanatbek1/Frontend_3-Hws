// Homework 1.1

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const seePasswordBtn = document.querySelector('#seePasswordBtn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

seePasswordBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    confirmPasswordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
    confirmPasswordInput.type = 'password';
  }
});

submitButton.addEventListener('click', (event) => {
 
  if (!emailRegex.test(emailInput.value)) {
    event.preventDefault();
    alert('Пожалуйста, введите действительный адрес электронной почты');
  }
  
  if (!passwordRegex.test(passwordInput.value)) {
    event.preventDefault();
    alert('Пароль должен содержать как минимум одну строчную букву, одну прописную букву, одну цифру и содержать не менее 4 символов.');
  }
  
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    alert('Пароли не совпадают');
  }
});

// Homework 1.2

const block = document.querySelector(".block");

let positionX = 0;
let positionY = 0;
let moveRight = true;

function moveBlock() {
  if (moveRight) {
    if(positionX < 440) {
      positionX += 10;
      block.style.left = `${positionX}px`;
    } else if (positionY < 440) {
      positionY += 10;
      block.style.top = `${positionY}px`;
    } else {
    moveRight = false;
    }
  } else {
    if (positionX > 0) {
      positionX -= 10;
      block.style.left = `${positionX}px`;
    } else if (positionY > 0) {
      positionY -= 10;
      block.style.top = `${positionY}px`;
    } else {
      moveRight = true;
    }
  }

  setTimeout(moveBlock, 100);
};

block.addEventListener("click", () => {
  moveBlock();
});


