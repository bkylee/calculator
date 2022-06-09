const display = document.querySelector("#display");
let total = 0; 
display.textContent = total;

const add = function(x,y) {
    let sum = x + y;
    return sum;
  };
  
  const subtract = function(x,y) {
      result = x-y;
    return result;
  };
  
  const sum = function(...numbers) {
    let total = 0;
    if (numbers.length === 0) {
      return total;
    }
    else {return total = Array.from(...numbers).reduce((x,y) => {return x + y}, 0);}
    };
  
  const multiply = function(...numbers) {
    total = 0;
    return total = Array.from(...numbers).reduce((x,y) => {return x * y});
  };
  
  const power = function(x,y) {
      total = x**y;
    return total;
  };
  
  const factorial = function(x) {
    total = 0;
      if (x === 0) {
      return total = 1;
    }
      else {
        return total = (x * factorial(x-1));
    }
  };

  