

// Variables
let numberA = 0;
let numberB = 0;
let operator = "/";

// Dom elements

const numberButtonElements = document.querySelectorAll(".number-button");

const plusButtonElement = document.querySelector("plus");
const subtractButtonElement = document.querySelector("subtract");
const multiplyButtonElement = document.querySelector("multiply");
const equalsButtonElement = document.querySelector("equals");
const clearButtonElement = document.querySelector("clear");

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
    (operator === "/") ? divide(numberA, numberB) :
    (operator === "*")? multiply(numberA, numberB) :
    (operator === "-") ? subtract(numberA, numberB) :
    (operator = "+")? add(numberA, numberB) :
    "Error";    
}


  numberButtonElements.forEach(button => {
    button.addEventListener("click", () => populateDisplay(button));
});

function populateDisplay(button) {
    displayElement.textContent = button.textContent;
}