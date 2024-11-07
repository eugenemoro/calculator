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
    //if it's zero we need to replace it if not decimal
    //if previous was a function we need to start display from scratch
    //no more than one decimal in number
    if (display.value !== '0' && !previousButtonIsFunction && !(e.target.value === '.')) {
      display.value += e.target.value;
    } else if (e.target.value === '.'){
      if (!display.value.includes('.')) display.value += e.target.value;
      if (previousButtonIsFunction) display.value = '0.';
    } else {
      display.value = e.target.value;
    }
    previousButtonIsFunction = false;
  } else if (e.target.classList.contains('btn-function')) {  
    if (e.target.id === 'btn-divide') {
      if (mathOperation !== '' && !previousButtonIsFunction) calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'divide';
    } else if (e.target.id === 'btn-multiply') {
      if (mathOperation !== '' && !previousButtonIsFunction) calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'multiply';
    } else if (e.target.id === 'btn-add') {
      if (mathOperation !== '' && !previousButtonIsFunction) calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'add';
    } else if (e.target.id === 'btn-subtract') {
      if (mathOperation !== '' && !previousButtonIsFunction) calculateAndDisplay();
      arg1 = Number(display.value);
      mathOperation = 'subtract';  
    } else if (e.target.id === 'btn-clear') {
      arg1 = 0;
      arg2 = 0;
      mathOperation = '';
      display.value = 0;
    } else if (e.target.id === 'btn-equal') {
      if (mathOperation) calculateAndDisplay();
    } else if (e.target.id === 'btn-backspace') {
      if (!previousButtonIsFunction){
        if (display.value.length > 1) {
          display.value = display.value.slice(0, display.value.length - 1);
        } else {
          display.value = 0;
        }
      }
    }
    if (!(e.target.id === 'btn-backspace')) previousButtonIsFunction = true;
  } 
});

function calculateAndDisplay() {
  arg2 = Number(display.value);
  let result = operate(mathOperation, arg1, arg2);
  //to round the result
  if (result.toString().includes('.') && result.toString().split('.')[1].length >= 10) result = Math.round(result * 100000000) / 100000000; 
  display.value = result;
}
