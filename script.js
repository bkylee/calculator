//operate function that takes an operator and 2 nukmbers and then calls one of the functions on the numbers 
const operate = function (operator, x,y) {
  if (operator === "+"){
    add(x,y);
  }
  else if (operator === "-") {
    subtract(x,y);
  }
  else if (operator === "*") {
    multiply(x,y);
  }
  else if (operator === "/") {
    divide(x,y);
  }
}


// set manipulative display variable. 

let total = 0;
let currentVal = "0";

const display = document.querySelector("#display"); 
display.textContent = currentVal;


const add = function(x,y) {
    total = x+y;
  };
  
  const subtract = function(x,y) {
    total = x-y;
  };
  
  const multiply = function(x,y) {
    total = x*y;
  };
  const divide = function(x,y) {
    total = x/y;
  };

//event listeners for all number buttons 

const num1 = document.querySelector("#one");
num1.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "1";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "1";
  display.textContent = currentVal;
}); 

const num2 = document.querySelector("#two");
num2.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "2";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "2";
  display.textContent = currentVal;
}); 

const num3 = document.querySelector("#three");
num3.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "3";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "3";
  display.textContent = currentVal;
}); 

const num4 = document.querySelector("#four");
num4.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "4";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "4";
  display.textContent = currentVal;
}); 

const num5 = document.querySelector("#five");
num5.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "5";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "5";
  display.textContent = currentVal;
}); 

const num6 = document.querySelector("#six");
num6.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "6";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "6";
  display.textContent = currentVal;
}); 

const num7 = document.querySelector("#seven");
num7.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "7";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "7";
  display.textContent = currentVal;
}); 

const num8 = document.querySelector("#eight");
num8.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "8";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "8";
  display.textContent = currentVal;
}); 

const num9 = document.querySelector("#nine");
num9.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "9";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "9";
  display.textContent = currentVal;
}); 

const num0 = document.querySelector("#zero");
num0.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "0";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "0";
  display.textContent = currentVal;
}); 

const dblZero = document.querySelector("#dblZero");
dblZero.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "00";
    display.textContent = currentVal;
  }
  else
  currentVal = currentVal + "00";
  display.textContent = currentVal;
}); 

//Function below is to replace the event listener individual functions but is currently WIP

// function updateVal (n) {
//     if (currentVal === "0"){
//       currentVal = `${n}`;
//       display.textContent = currentVal;

//     }
//     else {
//     currentVal = `${currentVal} + ${n}`;
//     display.textContent = currentVal;
//   }
// }