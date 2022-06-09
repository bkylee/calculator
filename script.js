// set manipulative display variable. 

const display = document.querySelector("#display");
let total = 0; 
display.textContent = total;




const add = function(x,y) {
    display.textContent = x+y;
  };
  
  const subtract = function(x,y) {
    display.textContent = x-y;
  };
  
  const multiply = function(x,y) {
    display.textContent = x*y;
  };
  
  const power = function(x,y) {
      total = x**y;
    display.textContent = total;
  };
  
  const factorial = function(x) {
    total = 0;
      if (x === 0) {
      display.textContent = 1;
    }
      else {
        display.textContent = (x * factorial(x-1));
    }
  };

