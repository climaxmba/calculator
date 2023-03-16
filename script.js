const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const signs = '+-÷×';
let currDisplay1 = '';
let ans;

ready();

function ready() {
    clearDisplay();

    document.getElementById('clear').onclick = () => clearDisplay();
    document.getElementById('del').onclick = () => updateDisplay1('', 'del');
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => updateDisplay1(numbers[i].textContent));
    }
    for (let i = 0; i < operators.length; i++) {
        operators[i].onclick = () => {
            if (!signs.includes(display1.textContent.slice(-1))) {
                updateDisplay1(operators[i].textContent);
            } else {
                display1.textContent = display1.textContent.slice(0, -1);
                updateDisplay1(operators[i].textContent);
            }
        }
    }
}

function clearDisplay() {
    display1.textContent = '';
    display2.textContent = '';
    currDisplay1 = '';
}

function updateDisplay1(btn, del) {
    if (!del) {
        display1.textContent += btn;  
    } else (
        display1.textContent = display1.textContent.slice(0, -1)
    )
    currDisplay1 = display1.textContent;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        default:
            break;
    }
}