let a = null;
let b = null;
let operator = '';

const buttons = document.querySelectorAll('.btn');


function pickA(){
  a = document.querySelectorAll('.btnNum').textContent;
};

function pickB(){
  b = document.querySelectorAll('.btnNum').textContent;
};

function pickOperator(){
  operator = document.querySelectorAll('.btnNum').textContent;
};

const sumDispley = document.querySelector('.sum');
sumDispley.textContent = `${a} ${operator} ${b}`;

const add = addNum(a, b);
function addNum(a, b) {
  let val = a + b;
  return(val);
};

const subtract = subtractNum(a, b);
function subtractNum(a, b) {
	let val = a - b;
  return(val);
};

const multiply = multiplyNum(a, b);
function multiplyNum(a, b) {
	let val = a * b;
  return(val);
};

const divide = divideNum(a, b);
function divideNum(a, b) {
	let val = a / b;
  return(val);
};


function operate(){
  let operandOne = pickA();
  let operandTwo = pickB();
  if(operator === '+'){
    let val = addNum(operandOne, operandTwo);
    return(val);
  }
  else if(operator === '-'){
    let val = subtractNum(operandOne, operandTwo);
    return(val);
  }
  else if(operator === '*'){
    let val = multiplyNum(operandOne, operandTwo);
    return(val);
  }
  else if(operator === '/'){
    let val = divideNum(operandOne, operandTwo);
    return(val);
  };
};
operate();
console.log(operate());