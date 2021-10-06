let a = [];
let b = [];
let operator = '';
const sumBtn = document.querySelector('#sum');
const numButtons = document.querySelectorAll('.numBtn');
const operatorButtons = document.querySelectorAll('.operatorBtn');
const screen = document.querySelector('.upperNum');
const screenSum = document.querySelector('.lowerNum');
const clearBtn = document.querySelector('#c');
const removeBtn = document.querySelector('#r');
const commaBtn = document.querySelector('#comma');


//prevent inputing multiple commas to the arrays A and B
function preventMultipleCommas(){
  if(a.includes('.'))  {
    commaBtn.classList.add('disableBtn');
    console.log();
  }
  if(operator != '') {
    commaBtn.classList.remove('disableBtn');
  }
  if(b.includes('.'))  {
    commaBtn.classList.add('disableBtn');
  }
};


removeBtn.addEventListener('click', ()  =>  {
  if((b.length === 0) && (operator = '')){
    a.pop();
    screen.textContent = `${a.join('')}${operator}${b.join('')}`
    console.log(a);
    }
  if(b.length != 0){
  b.pop();
  screen.textContent = `${a.join('')}${operator}${b.join('')}`
  console.log(b);
  }
  else if(b.length === 0){
    operator = '';
    screen.textContent = `${a.join('')}${operator}${b.join('')}`
  }
  
  
});

//emptying both arrays and settion screen to default when pressing C
clearBtn.addEventListener('click', () =>  {
  a = [];
  b = [];
  operator = '';
  screen.textContent = '0';
  hideNull();
  document.querySelector('.upperNum').classList.remove('hideNull');
  document.querySelector('.lowerNum').classList.remove('displeySum');
  commaBtn.classList.remove('disableBtn');
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


//when a operator button is clicked while there is a math expression displeyed, clear everything, and than push the sum of that expression as the new A
function changeAtoNewSum()  {
  if(b.join('') != ''){
    a = [];
    b = [];
    operator = '';
    a.push(screenSum.textContent);
    document.querySelector('.lowerNum').classList.remove('displeySum');
  };
};

//click event listener for number buttons, pushing the button text content to A and if an operator is selected than the numbers are pushed to B
numButtons.forEach((numBtn) =>  {
  numBtn.addEventListener('click', () =>{
    if(operator === ''){
      a.push(numBtn.textContent);
      screen.textContent = a.join('');
      preventMultipleCommas();
    }
    else if(operator != ''){
      b.push(numBtn.textContent);
      screen.textContent = `${a.join('')}${operator}${b.join('')}`
      hideNull();
      let sum = operate(a, b);
      screenSum.textContent = sum;
      preventMultipleCommas();
    };
  });
});


//operator buttons on click event listener
operatorButtons.forEach((operatorBtn) =>  {
  operatorBtn.addEventListener('click', ()  =>{
    if(screen.textContent != '0'){
      changeAtoNewSum();
      operator = operatorBtn.textContent;
      screen.textContent = `${a.join('')}${operator}${b.join('')}`
    };
  });
});


//click event listener for the sum button
sumBtn.addEventListener('click', ()=>{
    a = [];
    b = [];
    operator = '';
    a.push(screenSum.textContent);
    screen.textContent = `${a.join('')}`;
  document.querySelector('.lowerNum').classList.add('hideNull');
});


//picking the operator to use in the IF statement in the operate function
function pickOperator(){
  operator = document.querySelectorAll('.btnNum').textContent;
};


//adding function
const add = addNum(a, b);
function addNum(a, b) {
  let val = (a + b);
  return(val);
};


//subtract function
const subtract = subtractNum(a, b);
function subtractNum(a, b) {
	let val = (a - b);
  return(val);
};


//multiply function
const multiply = multiplyNum(a, b);
function multiplyNum(a, b) {
	let val = (a * b).toFixed(1);
  return(val);
};


//divide function
const divide = divideNum(a, b);
function divideNum(a, b) {
	let val = (a / b).toFixed(1);
  return(val);
};


//run the math expression based on what operator is selected 
function operate(){
  let operandOne = parseFloat(a.join(''));
  let operandTwo = parseFloat(b.join(''));
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
