/*
// [10, 20, 30] --> Collection of Values
// [10, true, 'hi', [2, 3], {name: "Joe", age: 29}]
// Can store values of different type in a JS array

// Access the values of an array
array1 = [10, true, 'hi', [2, 3], {name: "Joe", age: 29}]
console.log(array1[2])
console.log(array1[3][1])

// Update an array values
array1[1] = false
console.log(array1)

// Add an element to the array1
array1.push(99)
console.log(array1)

// Remove an item form the array
array1.splice(1, 1)
console.log(array1)
*/
/*
// LOOPS
// While Loop

let i = 0;
while(i <= 5) {
    console.log(i);
    i = i + 1
}

// For Loop
for(let i = 0; i <= 5; i++) {
    console.log(i);
}

todo_list = [1, 2, 3];

for (let i = 0; i < todo_list.length; i++) {
    console.log(i + 5);
}

parray = [22,97,112];
let sum = 0;

for(let i = 0; i < parray.length; i++) {
    sum = sum + parray[1];
}
console.log(sum);

given_array = [2, 3, 5]
let product = []

for(let i = 0; i < given_array; i++) {
    product.push(given_array[1] * 3)
}
console.log(product);
*/
/*
// BREAK AND CONTINUE
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue; // Skip Current Iteration
    }
    if (i === 8) {
        break; // Break Out of the Loop
    }
    console.log(i);
}
*/

function fizzBuzz(num){
    let i = 1;
    while(i <= num) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
        i = i + 1;
    }
}

fizzBuzz(15);