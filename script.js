let a = [];
let b = [];
let operator = '';
const sumBtn = document.querySelector('#sum');
const numButtons = document.querySelectorAll('.numBtn');
const operatorButtons = document.querySelectorAll('.operatorBtn');
const screen = document.querySelector('.upperNum');
const screenSum = document.querySelector('.lowerNum');
const clearBtn = document.querySelector('#c');


//emptying both arrays and settion screen to default when pressing C
clearBtn.addEventListener('click', () =>  {
  a = [];
  b = [];
  screen.textContent = 0;
  hideNull();
});


//hide lower row where the sum is displayed before there are 2 operators with an operand
hideNull();
function hideNull(){
  if(screen.textContent === '0'){
    document.querySelector('.lowerNum').classList.add('hideNull');
  }
  else{
    document.querySelector('.lowerNum').classList.remove('hideNull');
  };
};


numButtons.forEach((numBtn) =>  {
  numBtn.addEventListener('click', () =>{
    if(operator === ''){
      a.push(numBtn.textContent);
      screen.textContent = a.join('');
    }
    else if(operator != ''){
      b.push(numBtn.textContent);
      screen.textContent = `${a.join('')}${operator}${b.join('')}`
      hideNull();
      let sum = operate(a, b);
      screenSum.textContent = sum;
    };
  });
});

operatorButtons.forEach((operatorBtn) =>  {
  operatorBtn.addEventListener('click', ()  =>{
    if(screen.textContent != '0'){
    operator = operatorBtn.textContent;
    screen.textContent = `${a.join('')}${operator}${b.join('')}`
    };
  });
});



sumBtn.addEventListener('click', ()=>{
  let sum = operate(a, b);
  screenSum.textContent = sum;
  document.querySelector('.upperNum').classList.add('hideNull');
  document.querySelector('.lowerNum').classList.add('displeySum');
  console.log(operate());
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
  let operandOne = parseInt(a.join(''));
  let operandTwo = parseInt(b.join(''));
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
