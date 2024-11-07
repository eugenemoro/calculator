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
    previousButtonIsFunction = true;
    switch (e.target.id) {
      case 'btn-divide': {
        arg1 = Number(display.value);
        mathOperation = 'divide';
        break;
      }
      case 'btn-multiply': {
        arg1 = Number(display.value);
        mathOperation = 'multiply';
        break;
      }
      case 'btn-add': {
        arg1 = Number(display.value);
        mathOperation = 'add';
        break;
      }
      case 'btn-clear': {
        arg1 = 0;
        arg2 = 0;
        mathOperation = '';
        display.value = 0;
        break;
      }
      case 'btn-subtract': {
        arg1 = Number(display.value);
        mathOperation = 'subtract';
        break;
      }
      case 'btn-equal': {
        arg2 = Number(display.value);
        display.value = operate(mathOperation, arg1, arg2);
        break;
      }
    }  
  }
});
