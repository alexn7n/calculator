// Dom elements

const numberButtonElements = document.querySelectorAll(".number-button");
const operatorButtonElements = document.querySelectorAll(".operate-button");
const equalsButtonElement = document.querySelector("#equals-button");
const clearButtonElement = document.querySelector("#clear-button");
const removeButtonElement = document.querySelector("#remove-button");
const previousOperandElement = document.querySelector("#previous-operand");
const currentOperandElement = document.querySelector("#current-operand");

// Values object

const values = {
  currentOperand: "",
  previousOperand: "",
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
  return b === 0 ? "Error" : a / b;
}

// Calculator functions

function clear() {
  values.currentOperand = "";
  values.previousOperand = "";
  values.operation = undefined;
}

function remove() {
  values.currentOperand = values.currentOperand.toString().slice(0, -1)

}

function appendNumber(number) {
if (number === "." && values.currentOperand.includes(".")) return
  values.currentOperand += number;
}

function chooseOperation(op) {
  if (values.currentOperand === "") return
  if (values.previousOperand !== "") {
  compute();
  }
  values.operation = op;
  values.previousOperand = values.currentOperand;
  values.currentOperand = "";
}

function compute() {
  let result;
  const x = parseFloat(values.previousOperand);
  const y = parseFloat(values.currentOperand);
  if (isNaN(x) || isNaN(y)) return
  switch (values.operation) {
      case "/": result = divide(x, y);
      break;
      case "x": result = multiply(x, y);
      break;
      case "-": result = subtract(x, y);
      break;
      case "+": result = add(x, y);
      break;
      default: result = "Error";
  }
values.currentOperand = result;
values.operation = undefined;
values.previousOperand = "";
}

function updateDisplay() {
  currentOperandElement.textContent = values.currentOperand; 
  if (values.operation !== undefined) {
    previousOperandElement.textContent = 
    `${values.previousOperand} ${values.operation}`
  } else {
    previousOperandElement.textContent = "";
  }
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
  compute();
  updateDisplay();
})

clearButtonElement.addEventListener ('click', button => {
  clear();
  updateDisplay();
})

removeButtonElement.addEventListener ('click', button => {
  remove();
  updateDisplay();
})