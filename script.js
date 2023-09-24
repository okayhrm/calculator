let currentInput = "";
let currentOperator = "";
let prevInput = "";
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    document.getElementById("display").value += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    currentInput = "";
}

function calculateResult() {
    if (currentInput !== "") {
        prevInput = currentInput;
        currentInput = eval(currentInput);
        document.getElementById("display").value = currentInput;
        resultDisplayed = true;
    }
}
