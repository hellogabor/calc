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
let lastKeyPress = null;

nums.forEach(function(button) {
    button.addEventListener('click', function() {
        if ((lastKeyPress == 'operator') || (lastKeyPress == 'equal')) {
            display.textContent = '';
            if (display.textContent.length < 16) {
                display.textContent += this.textContent;
                lastKeyPress = 'number';
            } else {
                lastKeyPress = 'number';
            }
        } else {
            if (display.textContent.length < 16) {
                display.textContent += this.textContent;
                lastKeyPress = 'number';
            } else {
                lastKeyPress = 'number';
            }
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
                a = parseFloat(display.textContent);
                operator = this.textContent;
            } else if (a !== null) {
                b = parseFloat(display.textContent);
                operator = this.textContent;
                operate(a, operator, b);
                display.textContent = trueResult();
                a = null;
            } else if (b !== null) {
                b = parseFloat(display.textContent);
                operate(result, operator, b);
                display.textContent = trueResult();
                operator = this.textContent;
            }
        }
        lastKeyPress = 'operator';
        });
});

equal.addEventListener('click', function() {
    if ((result == null)) {
        b = parseFloat(display.textContent);
        operate(a, operator, b);
        display.textContent = trueResult();
        console.log(result);
        a = null;
        b = null;
        operator = null;
        result = null;
    } else {
        b = parseFloat(display.textContent);
        operate(result, operator, b);
        display.textContent = trueResult();
        a = null;
        b = null;
        operator = null;
        result = null;
    }
    lastKeyPress = 'equal';
});

clear.addEventListener('click', function() {
    display.textContent = '';
    a = null;
    b = null;
    operator = null;
    result = null;
});

function trueResult() {
    if (result == 'ERROR') {
        return 'ERROR';
    } else {
        return parseFloat(result.toFixed(15));
    }
}