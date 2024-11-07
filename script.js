function add(a, b) {
  return a + b;
}

function subtruct(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let arg1 = 0;
let arg2 = 0;
let mathOperation = '';
let previousButtonIsFunction = false;

function operate(mathOperation, arg1, arg2) {
  switch (mathOperation) {
    case 'add': return add(arg1, arg2);
    case 'subtract': return subtruct(arg1, arg2);
    case 'multiply': return multiply(arg1, arg2);
    case 'divide': return divide(arg1, arg2);
    default: break;
  }  
}

const buttons = document.getElementById('buttons');
const display = document.getElementById('display');

//REFACTOR: separate functions for input buttons and function buttons
buttons.addEventListener('click', (e) =>{
  if (e.target.classList.contains('btn-input')) {
    if (display.value !== '0' && !previousButtonIsFunction) {
      display.value += e.target.value;
    } else {
      display.value = e.target.value;
      previousButtonIsFunction = false;
    }
  } else if (e.target.classList.contains('btn-function')) {  
    if (e.target.id === 'btn-divide') {
      if (mathOperation !== '') calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'divide';
    } else if (e.target.id === 'btn-multiply') {
      if (mathOperation !== '') calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'multiply';
    } else if (e.target.id === 'btn-add') {
      if (mathOperation !== '') calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'add';
    } else if (e.target.id === 'btn-subtract') {
      if (mathOperation !== '') calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'subtract';  
    } else if (e.target.id === 'btn-clear') {
      arg1 = 0;
      arg2 = 0;
      mathOperation = '';
      display.value = 0;
    } else if (e.target.id === 'btn-equal') {
      calculateAndDisplay();
    }
    previousButtonIsFunction = true;
  } 
});

function calculateAndDisplay() {
  arg2 = Number(display.value);
  display.value = operate(mathOperation, arg1, arg2);
}
