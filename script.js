// set manipulative display variable. 

const display = document.querySelector("#display");
let total = 0; 
display.textContent = total;




const add = function(x,y) {
    let sum = x + y;
    display.textConten = sum;
  };
  
  const subtract = function(x,y) {
      result = x-y;
    display.textContent = result;
  };
  
  const sum = function(...numbers) {
    let total = 0;
    if (numbers.length === 0) {
      display.textContent = total;
    }
    else {display.textContent total = Array.from(...numbers).reduce((x,y) => {display.textContent x + y}, 0);}
    };
  
  const multiply = function(...numbers) {
    total = 0;
    display.textContent total = Array.from(...numbers).reduce((x,y) => {display.textContent x * y});
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

