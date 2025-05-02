const numberInput = document.getElementById('numberInput');
const submitBtn = document.getElementById('submitBtn');
const counterValue = document.getElementById('counterValue');
const counterBox = document.getElementById('counterBox');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const chooseColor = document.getElementById('chooseColor');
const colorOptions = document.getElementById('colorOptions');
const resetColorBtn = document.getElementById('resetColor');

let count = 0;
let numberColor = null;

function updateCounter() {
  counterValue.textContent = count;

  if (count > 0) {
    decrease.style.backgroundColor = '#ff0000';
    increase.style.backgroundColor = '#00FF00';

  } else if (count === 0) {
    decrease.style.backgroundColor = '#ff0000';
  } else {
    counterBox.style.backgroundColor = '#e74c3c';
  }

  if (numberColor) {
    counterValue.style.color = numberColor;
  } else {
    counterValue.style.color = 'white';
  }
}

submitBtn.addEventListener('click', () => {
  const value = parseInt(numberInput.value);
  if (!isNaN(value)) {
    count = value;
    updateCounter();
  }
});increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
  toggleButtonActive(increaseBtn);
});

decreaseBtn.addEventListener('click', () => {
  count = Math.max(0, count - 1);
  updateCounter();
  toggleButtonActive(decreaseBtn);
});

chooseColor.addEventListener('click', () => {
  colorOptions.style.display = colorOptions.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.color-circle').forEach(circle => {
  circle.addEventListener('click', () => {
    numberColor = circle.dataset.color;
    updateCounter();
    colorOptions.style.display = 'none';
  });
});

resetColorBtn.addEventListener('click', () => {
  numberColor = null;
  updateCounter();
});

function toggleButtonActive(button) {
  button.classList.add('active-btn');

  setTimeout(() => {
    button.classList.remove('active-btn');
  }, 300);
}