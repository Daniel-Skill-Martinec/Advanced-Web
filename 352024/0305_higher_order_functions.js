/*
function greeting() {
    console.log('Hello');
}
greeting();

// JS Functions can be assigned to a variable
const num = 2;
const function1 = function greeting() {
    console.log('Hello From Function Variable');
}

console.log(function1);
console.log(typeof function1);
function1();

// Anonymous Functions
const function2 = function() {
    console.log('Hello From Anonymous Function');
}
function2();

// Functions can be passed as parameters to another function
// Run is a function that is expecting another function as a parameter
function run(param) {
    param();
}

run(function() {
    console.log('Hello From Function Parameter');
})

// Regular Functions
const regular_function = function(param1, param2) {
    console.log('Hello From Function Variable');
}

// Arrow Functions
const arrow_function = (param1, param2) => {
    console.log('Hello From Arrow');
}

// When there is only one parameter we can remove the brackets around them
const arrow_function2 = param => {
    console.log(param + 10);
}
arrow_function2(1);

// When there is only one line of code inside a function, we can move it to the same line as of function declaration
const arrow_function3 = param => param + 100;
console.log(arrow_function3(10));

// for-each to iterate over an array
[
    'apple','banana','orange'
].forEach((value, index) => {
    if (value === 'banana'){
        return;
    }
    console.log(value);
    console.log(index);
})
*/

// Event Listeners
const button_element = document.querySelector('.js_button');

// Define an event listener function
const event_listener = () => {
    console.log('Click Event');
};

const event_listener2 = () => {
    console.log('Second Click Event');
}

button_element.addEventListener('click', event_listener);

button_element.addEventListener('click', event_listener2);

// Remove an Event
button_element.removeEventListener('click', event_listener);
