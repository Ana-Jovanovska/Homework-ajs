console.log("Calculate is working");

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

let currentOperand = "";
let previousOperand = "";
let selectedOperator = null;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectOperator(button.textContent);
  });
});

equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clear);

function appendNumber(number) {
  currentOperand += number;
  display.value = currentOperand;
}

function selectOperator(operator) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  selectedOperator = operator;
  previousOperand = currentOperand;
  currentOperand = "";
}
