/* function greeting(){
    console.log('Hello!');
}

greeting(); */

/* function check() {
    console.log ('How are you doing?')
}

function greeting(name="User") {
    console.log (`Hello ${name}!`)
    check();
}

greeting("Daniel");
greeting(); */

////Consider 70 as age to retire. Write a function that takes age input and calculates the number of //Days/Weeks/Months left until retirement.
//Assumption: 365 Days, 52 Weeks, 12 Months
//You have 730 Days/104 Weeks/24 Months until retirement!

/* function retirement(age) {
    years = 70 - age;
    months = 12 * years;
    weeks = 52 * years;
    days = 365 * years;

    console.log(`You Have ${days} Days/${weeks} Weeks/${months} Months/${years} Years Left!`);
}

retirement(70); */
 
///Grade Calculator
//3 Inputs from User using Prompt. EX: Enter Math Score.
//Average<70 --> C; Greater Than 70 and Less Than 90 --> B; A 
///Output the Grade in an Alert Box

/* function gradeCalculator() {
    const first_score = parseInt(prompt('Enter First Score:'));
    const second_score = parseInt(prompt('Enter Second Score:'));
    const third_score = parseInt(prompt('Enter Third Score:'));

    const average_score = (first_score+second_score+third_score)/3
    
    if(average_score<70){
        alert(`${average_score}% C Grade`);
    } else if(average_score>=70 && average_score<90) {
        alert(`${average_score}% B Grade`);
    } else {
        alert(`${average_score}% A Grade`);
    }
}

gradeCalculator(); */

////Savings Calculator

/* function taxCalculator(salary) {
    return 0.30*salary;
}

function calculateSavings(salary, rent, expense) {
    const tax_deductions = taxCalculator(salary);
    total_expenses = tax_deductions+rent+expense;
    net_savings = salary - total_expenses;
    console.log(`Salary: ${salary}   Saving: ${net_savings}`)
}

calculateSavings(3000, 850, 1200); */


let x = 10; //Global Scope

function run(){
    console.log(x);
    let y = 25;  //Local Scope
    console.log(`y from inside the function: ${y}`)
    console.log(`z from inside the function: ${y}`) //Fail
}

console.log(`y from global ${y}`); //Fail
run();

if(true) {
    let z = 30;
    console.log(x);
    console.log(`z from global ${z}`)
    console.log(`y from global ${y}`) //Fail
}

console.log(`z from global ${z}`); //Fail