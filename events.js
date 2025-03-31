// Dom elements

const numberButtonElements = document.querySelectorAll(".number-button");
const operatorButtonElements = document.querySelectorAll(".operate-button");
const equalsButtonElement = document.querySelector("#equals-button");
const clearButtonElement = document.querySelector("#clear-button");
const previousOperandElement = document.querySelector("#previous-operand");
const currentOperandElement = document.querySelector("#current-operand");

// Values object

const values = {
  currentOperand: currentOperandElement,
  previousOperand: previousOperandElement,
  operation: undefined,
};

// Math functions

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

// Calculator functions

function clear() {
  currentOperandElement.textContent = "";
  previousOperandElement.textContent = "";
  values.operation = undefined;
}

function remove() {

}

function appendNumber(number) {
if (number === "." && values.currentOperand.textContent.includes(".")) return
  values.currentOperand.textContent += number;
}

function chooseOperation(op) {
  if (values.currentOperand.textContent === "") return
  if (values.previousOperand.textContent !== "") {
    compute(values.previousOperand.textContent, values.currentOperand.textContent, values.operation);
  }
  values.operation = op;
  values.previousOperand.textContent = values.currentOperand.textContent;
  values.currentOperand.textContent = "";
}

function compute(numberA, numberB, operator) {
  let result;
  switch (operator) {
      case "/": return divide(numberA, numberB);
      case "*": return multiply(numberA, numberB);
      case "-": return subtract(numberA, numberB);
      case "+": return add(numberA, numberB);
      default: result = "Error";
  }
values.currentOperand.textContent = result;
values.previousOperand.textContent = "";
values.operation = undefined;
}

function updateDisplay() {
  currentOperandElement.textContent = values.currentOperand.textContent;  
}

// Click events

numberButtonElements.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
    updateDisplay();
  });
});

operatorButtonElements.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.textContent);
    updateDisplay();
  });
});

equalsButtonElement.addEventListener ('click', button => {
  compute(values.currentOperand.textContent, values.previousOperand.textContent, values.operation)
  updateDisplay();
})

clearButtonElement.addEventListener ('click', () => {
  clear()
})
