let a;
let b;
let operator;

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

let solution;

const operate = function(a, operator, b) {
    if (operator == '+') {
        solution = add(a, b);
    } else if (operator == '-') {
        solution = subtract(a, b);
    } else if (operator == '*') {
        solution = multiply(a, b);
    } else if (operator == '/') {
        solution = divide(a, b);
    }
    display.innerHTML = solution;
}

// DOM stuff

let nums = document.querySelectorAll('.btn-number');
let ops = document.querySelectorAll('.btn-operator');
let equal = document.querySelector('.btn-equals');
let clear = document.querySelector('.btn-clear');
let display = document.querySelector('#display');
let displayValue;

nums.forEach(function(button) {
    button.addEventListener('click', function() {
        display.innerHTML += this.textContent;
        displayValue = this.textContent;
        // console.log(`You clicked ${this.textContent}`);
    });
});

ops.forEach(function(button) {
    button.addEventListener('click', function() {
        operator = this.textContent;
        a = parseInt(displayValue);
        console.log(a);
        console.log(operator);
        // console.log(`You clicked ${this.textContent}`);
    });
});

equal.addEventListener('click', function() {
    b = parseInt(displayValue);
    console.log(b);
    operate(a, operator, b);
    console.log(solution);
});

clear.addEventListener('click', function() {
    display.innerHTML = '';
    a = 0;
    b = 0;
});