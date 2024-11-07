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

function operate(mathOperation, arg1, arg2) {
  switch (mathOperation) {
    case 'add': return add(arg1, arg2);
    case 'subtract': return subtruct(arg1, arg2);
    case 'multiply': return multiply(arg1, arg2);
    case 'divide': return divide(arg1, arg2);
    default: break;
  }  
}
