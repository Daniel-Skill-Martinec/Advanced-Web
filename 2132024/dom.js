console.log(document.title);

document.title = 'DOM';
console.log(document.title);
// Using document object, we can gain control of the html inside js

console.log(document.body);
document.body.innerHTML = 'New Text';

// We can replace normal text with html too
document.body.innerHTML = '<button>Submit</button>'

document.querySelector('button').innerHTML ='New Button';
// document.querySelector('#button-id') // Selecting Element by ID

// document.querySelector('.button-id') // Selecting Element by Class

