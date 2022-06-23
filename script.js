//operate function that takes an operator and 2 nukmbers and then calls one of the functions on the numbers 
const operate = function (operator, x,y) {
  x = Number(x);
  y = Number(y);
  if (operator === "+"){
    return add(x,y);
  }
  else if (operator === "-") {
    return subtract(x,y);
  }
  else if (operator === "*") {
    return multiply(x,y);
  }
  else if (operator === "/") {
    return divide(x,y);
  }
}

//operation functions for operate
const add = function(x,y) {
    return x+y;
  };
  
  const subtract = function(x,y) {
    return x-y;
  };
  
  const multiply = function(x,y) {
    return x*y;
  };
  const divide = function(x,y) {
    return x/y;
  };

// set manipulative display variable. 
let total = "0";
let currentVal = "0";
let currentOp = "empty";

const display = document.querySelector("#display"); 
display.textContent = currentVal;

//event listeners for all opeartions 

const equals = document.querySelector("#equals");
equals.addEventListener('click', ()=>{
if (total === "0") {
  display.textContent = Number(currentVal);
}
else {
total = Number(operate(currentOp, Number(total), Number(currentVal)));
display.textContent = total;}
currentOp = "empty";
currentVal ="0";
});

const plus = document.querySelector("#plus");
plus.addEventListener('click', ()=>{
  if(currentOp === "empty"){
    currentOp = "+";
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
  }
  else{
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
display.textContent = total;}
currentOp = "+";
currentVal ="0";
});

const minus = document.querySelector("#minus");
minus.addEventListener('click', ()=>{
  if(currentOp === "empty"){
    currentOp = "+";
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
  }
  else{
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
display.textContent = total;}
currentOp = "-";
currentVal ="0";
});

const times = document.querySelector("#times");
times.addEventListener('click', ()=>{
  if(currentOp === "empty"){
    currentOp = "+";
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
  }
  else{
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
display.textContent = total;}
currentOp = "*";
currentVal ="0";
});

const slash = document.querySelector("#slash");
slash.addEventListener('click', ()=>{
  if(currentOp === "empty"){
    currentOp = "+";
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
  }
  else{
    total = Number(operate(currentOp, Number(total), Number(currentVal)));
display.textContent = total;}
currentOp = "/";
currentVal ="0";
});
//event listeners for all number buttons 

const num1 = document.querySelector("#one");
num1.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "1";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "1";
  display.textContent = currentVal;}
}); 

const num2 = document.querySelector("#two");
num2.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "2";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "2";
  display.textContent = currentVal;}
}); 


const num3 = document.querySelector("#three");
num3.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "3";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "3";
  display.textContent = currentVal;}
}); 


const num4 = document.querySelector("#four");
num4.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "4";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "4";
  display.textContent = currentVal;}
}); 


const num5 = document.querySelector("#five");
num5.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "5";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "5";
  display.textContent = currentVal;}
}); 


const num6 = document.querySelector("#six");
num6.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "6";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "6";
  display.textContent = currentVal;}
}); 


const num7 = document.querySelector("#seven");
num7.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "7";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "7";
  display.textContent = currentVal;}
}); 


const num8 = document.querySelector("#eight");
num8.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "8";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "8";
  display.textContent = currentVal;}
}); 


const num9 = document.querySelector("#nine");
num9.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "9";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "9";
  display.textContent = currentVal;}
}); 


const num0 = document.querySelector("#zero");
num0.addEventListener('click', () => {

  //check this currentVal === "0"
  if (display.textContent === total || currentVal === "0") {
    currentVal = "0";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "0";
  display.textContent = currentVal;}
}); 


const dblZero = document.querySelector("#dblZero");
dblZero.addEventListener('click', () => {
  if (display.textContent === total || currentVal === "0") {
    currentVal = "00";
    display.textContent = currentVal;
  }
  else{
  currentVal = currentVal + "00";
  display.textContent = currentVal;}
}); 


const clr = document.querySelector("#clear");
clr.addEventListener('click', () => {
  currentVal = "0";
  display.textContent = currentVal;
  dot.disabled = false;
}); 

const CE = document.querySelector("#CE");
CE.addEventListener('click', () => {
  currentVal = "0";
  total = "0";
  currentOp = "empty";
  display.textContent = currentVal;
  dot.disabled = false;
});


//have to add toggle for this button 
const dot = document.querySelector("#dot");
dot.addEventListener('click', () => {
  if (currentVal === "0") {
    currentVal = "0.";
    display.textContent = currentVal;
    dot.disabled = true;
  }
  else{
  currentVal = currentVal + ".";
  display.textContent = currentVal;
  dot.disabled = true;}
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