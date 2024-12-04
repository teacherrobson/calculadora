// script.js
let currentInput = '';
let currentOperation = null;
let firstNumber = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    
    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
    } else if (currentOperation) {
        calculateResult();
        firstNumber = parseFloat(currentInput);
    }
    
    currentOperation = operation;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || firstNumber === null || currentOperation === null) return;

    let secondNumber = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert('Não é possível dividir por zero!');
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    firstNumber = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    firstNumber = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
