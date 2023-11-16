let a = null;
let b = null;
let operator = null;
let result = null;

// basic calculator functions

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
	if (b == 0) {
        return 'ERROR';
    } else {
        return a / b;
    }
};

const operate = function(a, operator, b) {
    if (operator == '+') {
        result = add(a, b);
    } else if (operator == '-') {
        result = subtract(a, b);
    } else if (operator == 'x') {
        result = multiply(a, b);
    } else if (operator == '/') {
        result = divide(a, b);
    }
    // display.innerText = result;
}

// DOM stuff

let nums = document.querySelectorAll('.btn-number');
let ops = document.querySelectorAll('.btn-operator');
let equal = document.querySelector('.btn-equals');
let clear = document.querySelector('.btn-clear');
let display = document.querySelector('#display');
let displayValue = null;
let lastKeyPress = null;

nums.forEach(function(button) {
    button.addEventListener('click', function() {
        if (lastKeyPress == 'operator') {
            display.textContent = '';
            display.textContent += this.textContent;
            lastKeyPress = 'number';
        } else {
            display.textContent += this.textContent;
            lastKeyPress = 'number';
        }
        });
        // console.log(`You clicked ${this.textContent}`);
});

ops.forEach(function(button) {
    button.addEventListener('click', function() {
        if (lastKeyPress == 'operator') {
            operator = this.textContent;
        } else {
            if ((result == null) && (a == null)) {
                a = parseInt(display.textContent);
                operator = this.textContent;
            } else if (a !== null) {
                b = parseInt(display.textContent);
                operator = this.textContent;
                operate(a, operator, b);
                display.textContent = result;
                a = null;
            } else if (b !== null) {
                b = parseInt(display.textContent);
                operate(result, operator, b);
                display.textContent = result;
                operator = this.textContent;
            }
        }
        lastKeyPress = 'operator';
        });
});

equal.addEventListener('click', function() {
    b = parseFloat(displayValue);
    console.log(b);
    operate(a, operator, b);
    console.log(result);
});

clear.addEventListener('click', function() {
    display.innerHTML = '';
    a = null;
    b = null;
    operator = null;
});