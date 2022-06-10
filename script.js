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

const display = document.querySelector("#display"); 
display.textContent = currentVal;

let total = 0;
let currentVal = "0";

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

const num1 = document.querySelector("#1");
num1.addEventListener('onclick', updateVal(1)) 

function updateVal (n) {
    currentVal = currentVal + n;
    display.textContent = currentVal;
}