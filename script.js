let a = [];
let b = [];
let operator = '';
const sumBtn = document.querySelector('#sum');
const numButtons = document.querySelectorAll('.numBtn');
const operatorButtons = document.querySelectorAll('.operatorBtn');
const screen = document.querySelector('.screen');


numButtons.forEach((numBtn) => {
  numBtn.addEventListener('click', () =>{
    if(operator === ''){
      a.push(numBtn.textContent);
      screen.textContent = a.join('');
    }
    else if(operator != ''){
      b.push(numBtn.textContent);
      screen.textContent = `${a.join('')}${operator}${b.join('')}`
    };
  });
});


function finalA(){
 let newA = a.splice(',');
 screenA = newA;
 console.log(newA);
}
console.log([a]);
console.log([b]);


sumBtn.addEventListener('click', ()=>{
  operate(a, b);
});


function pickOperator(){
  operator = document.querySelectorAll('.btnNum').textContent;
};

//const sumDispley = document.querySelector('.screen');
//sumDispley.textContent = `${a} ${operator} ${b}`;

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
  let operandOne = a;
  let operandTwo = b;
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
console.log(operate());