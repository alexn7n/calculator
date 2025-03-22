// Variables
let numberA = null;
let numberB = null;
let operator = null;
let result = 0;

// Dom elements

const numberButtonElements = document.querySelectorAll(".number-button");
const calculateButtonElements = document.querySelectorAll(".calculate-button");

const equalsButtonElement = document.querySelector("#equals-button");
const clearButtonElement = document.querySelector("#clear-button");

let displayElement = document.querySelector("#display");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(numberA, numberB, operator) {
  switch (operator) {
    case "/":
      return divide(numberA, numberB);
    case "*":
      return multiply(numberA, numberB);
    case "-":
      return subtract(numberA, numberB);
    case "+":
      return add(numberA, numberB);
    default:
      return "Error";
  }
}

numberButtonElements.forEach((button) => {
  button.addEventListener("click", () => populateDisplay(button));
});

function populateDisplay(button) {
  displayElement.textContent += button.textContent;
}

calculateButtonElements.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberA === null) {
      numberA = displayElement.textContent;
    } else {
      numberB = displayElement.textContent;
    }
    displayElement.textContent = "";
    operator = button.textContent;
  });
});

equalsButtonElement.addEventListener("click", () => {
  const result = operate(Number(numberA), Number(numberB), operator);
  displayElement.textContent = result;
  console.log(result);
});
