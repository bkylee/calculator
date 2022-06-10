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

function updateVal (n) {
    if (currentVal === "0"){
      currentVal = n;
      display.textContent = currentVal;

    }
    else {
    currentVal = currentVal + n;
    display.textContent = currentVal;
  }
}