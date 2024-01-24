/*
if (true) {
    console.log('true');
} else {
    console.log('false');
}
*/

////Checking Driver Eligibility////

/*
const age = Number.parseInt(prompt('Enter Your Age'));
console.log(typeof age);

if(age >= 16) {
    alert('Eligible to Drive');
} else if(age >= 14) {
    alert('Almost There');
} else {
    alert('Not Eligible to Drive');
}
*/

////Truthy and Falsy Values////

/*
if(4) {
    console.log('Truthy Value');
}

if(0) {
    console.log('Checking 0');
}
*/

//Falsy Values -- 0, '', NaN, undefined, null -->
//Everything else is Truthy

////Ternary Operators////

/*
const res = true?'truthy':'falsy'
console.log(res);
*/

////Coin Flip Game/Random # Generator////
/*
const randNum = Math.random();
console.log(randNum);


if(randNum < 0.5) {
    console.log('Tails');
} else {
    console.log('Heads');
}


const coin_side = randNum < 0.5?'Tails':'Heads'
console.log(coin_side);
*/

////Switch Statemenet////
//Program to Identify Day of the Week Based on # Given//
//Sunday = 0 & Saturday = 6//

/*
let day = 3;
switch(day) {
    case 0: 
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Day')
        break;
}
*/