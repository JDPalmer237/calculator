//Calculator

//Number Buttons

let buttonOne = document.getElementById('buttonOne');
let buttonTwo = document.getElementById('buttonTwo');
let buttonThree = document.getElementById('buttonThree');
let buttonFour = document.getElementById('buttonFour');
let buttonFive = document.getElementById('buttonFive');
let buttonSix = document.getElementById('buttonSix');
let buttonSeven = document.getElementById('buttonSeven');
let buttonEight = document.getElementById('buttonEight');
let buttonNine = document.getElementById('buttonNine');
let buttonZero = document.getElementById('buttonZero');
let buttonDecimal = document.getElementById('buttonDecimal');
let numButtons = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine, buttonZero, buttonDecimal];

const NumOnClick = (button) => {
  button.onmousedown = () => {
    button.style.backgroundColor = 'white';
    button.style.opacity = '0.5';
    button.style.color = 'black';
    sum.push(button.innerHTML);
    screen.innerHTML = button.innerHTML;
    screenTwo.innerHTML = sum.join('');
  }
}


const NumOffClick = (button) => {
  button.onmouseup = () => {
    button.style = '';
  }
}

for (let i = 0; i < numButtons.length; i++) {
  NumOnClick(numButtons[i]);
  NumOffClick(numButtons[i]);
}


//Operators

let buttonDivide = document.getElementById('buttonDivide');
let buttonTimes = document.getElementById('buttonTimes');
let buttonMinus = document.getElementById('buttonMinus');
let buttonPlus = document.getElementById('buttonPlus');
let buttonPercentage = document.getElementById('buttonPercentage');
let operatorButtons = [buttonDivide, buttonTimes, buttonMinus, buttonPlus, buttonPercentage];

const operatorOnClick = (button) => {
  button.onmousedown = () => {
    button.style.opacity = '0.6';
    button.style.color = 'black';
    if (button.innerHTML === '÷') {
      sum.push('/');
      screenTwo.innerHTML = sum.join('');
    } else if (button.innerHTML === 'x') {
      sum.push('*');
      screenTwo.innerHTML = sum.join('');
    } else {
      sum.push(button.innerHTML);
      screenTwo.innerHTML = sum.join('');
    }
  }
}

const operatorOffClick = (button) => {
  button.onmouseup = () => {
    button.style = '';
  }
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorOnClick(operatorButtons[i]);
  operatorOffClick(operatorButtons[i]);
}


//Clear

let buttonClear = document.getElementById('buttonClear');

buttonClear.onmousedown = () => {
  buttonClear.style.opacity = '0.6';
  buttonClear.style.color = 'black';
  sum.pop();
  screenTwo.innerHTML = sum.join('');
}

buttonClear.onmouseup = () => {
  buttonClear.style = '';
}


//Clear All

let buttonClearAll = document.getElementById('buttonClearAll');

buttonClearAll.onmousedown = () => {
  buttonClearAll.style.opacity = '0.6';
  buttonClearAll.style.color = 'black';
  screen.innerHTML = 0;
  screenTwo.innerHTML = '';
  sum = [];
}

buttonClearAll.onmouseup = () => {
  buttonClearAll.style = '';
}


//Equals

let buttonEquals = document.getElementById('buttonEquals');
let sum = [];

buttonEquals.onmousedown = () => {
  buttonEquals.style.opacity = '0.6';
  buttonEquals.style.color = 'black';
  let answer = eval(sum.join(''));
  if (screen.innerHTML == 'undefined') {
    screen.innerHTML = 0;
  }
  if (answer.toString().length > 6) {
    answer = answer.toFixed(6);
  }
  screen.innerHTML = answer;
}

buttonEquals.onmouseup = () => {
  buttonEquals.style = '';
}

//Screens

let screenTwo = document.getElementById('screenTwo');
let screen = document.getElementById('screen');


//Things to sort out...

//Decimal should only be operational once during number input

//Percentage button works as Remainder rather than percentage

//can click equals after operator

//answer runs off screen when number gets too high

//second screen blows out if sum is too long

//once equals is clicked it needs to store the value so you can add to sum 
//e.g. 6 + 6 = 12 '+ 8 =20' but should only work when an operator is clicked