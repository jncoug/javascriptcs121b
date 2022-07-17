/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    
// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1+number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    const number1 = Number(document.querySelector('#addend1').value);
    const number2 = Number(document.querySelector('#addend2').value);

// Step 4: Assign the return value to an HTML form element with an ID of sum
    let sum = add(number1, number2);

    const sumId = document.querySelector('#sum');
    sumId.innerHTML = sum;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addButtonElement = document.querySelector('#addNumbers');
addButtonElement.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    const number1 = Number(document.querySelector('#minuend').value);
    const number2 = Number(document.querySelector('#subtrahend').value);

    let diff = subtract(number1, number2);

    const diffElement = document.querySelector('#difference');

    diffElement.innerHTML = diff;
}

const subtractButtonElement = document.querySelector('#subtractNumbers');
subtractButtonElement.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (number1, number2) => {
    return number1 * number2;
}

const mulitplyNumbers = () => {
    const number1 = Number(document.querySelector('#factor1').value);
    const number2 = Number(document.querySelector('#factor2').value);

    let product = multiply(number1, number2);

    const productElement = document.querySelector('#product');

    productElement.innerHTML = product;
}

const multiplyButtonElement = document.querySelector('#multiplyNumbers');
multiplyButtonElement.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    const number1 = Number(document.querySelector('#dividend').value);
    const number2 = Number(document.querySelector('#divisor').value);

    let quotient = divide(number1, number2);

    const quotientElement = document.querySelector('#quotient');

    quotientElement.innerHTML = quotient;
}

const divideButtonElement = document.querySelector('#divideNumbers');
divideButtonElement.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

// It all works, but it won't show up onto the disable text boxes

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

var date = new Date();

// Step 2: Declare a variable to hold the current year

var year;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

year = date.getFullYear()

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector('#year').innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector('#array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

var odds = [];
numbers.forEach(function (item) {
    if (item % 2 === 1) {
        odds.push(item)
    }
});

document.querySelector('#odds').innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

var evens = [];
numbers.forEach(function (item) {
    if (item % 2 === 0) {
        evens.push(item) 
    }
});

document.querySelector('#evens').innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"


document.querySelector('#sumOfArray').innerHTML = numbers.reduce(function (total, number) {
    return total + number;
});

// Step 6: Use the map array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

document.querySelector('#multiplied').innerHTML = numbers.map(function(number) {
    return number*2;
});

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

var newNumbers = numbers.map(function(number) {
    return number*2;
});

document.querySelector('#sumOfMultiplied').innerHTML = newNumbers.reduce(function (total, number) {
    return total + number;
});