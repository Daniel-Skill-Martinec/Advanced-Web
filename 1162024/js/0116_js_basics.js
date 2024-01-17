//alert('Hello');

/*
console.log('Hello World');
console.error('Error');
console.warn('Warning');
console.group('Simple Group Messages');
console.log('Hello World');
console.error('Error');
console.warn('Warning');
console.groupEnd();
*/

//Variable naming conventions
//Only letters, numbers, $, _
//Can start only with letters
emp_name = 'Joe';
//1three = 'Sally';
$ten = 'Ben';
//camelCase is good
//snake_case
//Don't use reserved keywords. EX: alert, console, for
//Better to have short and descriptive names
a = 'Joe';
emp_name = 'Joe'; //Better
name_of_the_employees = 'Joe';

// Let keyword to create variables
let age = 30;
console.log(age);

let salary;
console.log(salary); //Prints Undefined

/*console.log(score); //Reference Error*/
let score = 100;
score = score+10; //Adds 10 to score
score += 10;
score -= 10;
console.log(score);

console.log(points); //Prints Undefined
var points = 50;

const GPA = 3.0; //Constant should always be initialized 
//Use all caps for constants

//GPA = GPA + 1; //No

score = GPA + 1;

//=== is the best way to check True and False

// Strings
let x = 'Tsest String'
console.log(typeof x);
console.log(x.toUpperCase());
console.log(x.charAt(2)); // Returns 's' from 3rd position
console.log(x.indexOf('r')); //Returns Position of 'r'
console.log(x.substring(0, 3)); //Just returns tes (Ending index is not inclusive)
console.log(x.substring(4)); //Returns everything starting at the 4th index
console.log(x.slice(0, 5));
console.log(x.slice(-11, -3));
//Slice works with negative indexes as well

console.log(x.replace('Test', 'New')); //Replaces Test with New

console.log(x.includes('ring'));
console.log(x.split(' ')); //Splits it
//String Literals
let info;

const Name = 'Jane';
const Age =  29;
info = 'Hello, my name is ' +Name+ ' and I am ' +Age+ ' years old';
console.log(info);

info_new = `Hello, my name is ${Name} and I am ${Age} years old`;
console.log(info_new);