// Primitives - Integers, Characters, Floats, Strings
// Higher Order Data Types - Arrays, Functions, Objects

// Objects - help us to group multiple values together
// Used to represent real-world entities. EX: person, products, bank account etc..
// Key-value pairs

//// 1.Simple Person Object
/*
const person = {
    name: "John",
    age: 28,
    "full name": "John Doe",
    "skill-set": ['Java', 'PHP']
}

/// Accessing object properties
console.log(person.name); // Accessing via dot notation
console.log(person['name']); // Accessing via square brackets
console.log(person["full name"]);
console.log(person["skill-set"]);

/// Accessing Keys and Values
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

/// Modify Value of a Key
person['age'] = 34;
console.log(person);

/// Add New Property to Person Object
person['phone'] = '11-2222-3333'; // Key gets added if it doesn't exist// Updated if it does
console.log(person);

/// Deleting Existing Key
delete person['age'];
console.log(person);

/// Store Data in an Object
const product = {
    name: 'book',
    rating: {
        stars: 4,
        count: 80
    },
    inStock: false,
    last_sold_units: [34, 45, 89],

    //test_fun: function test(){
    //    console.log('Function Inside the Object');
    //}

    test_fun(){ //Same as Above
        console.log('Function Inside the Object');
    }
}

product.test_fun();

/// Freeze and Object - No More Changes Reflected
Object.freeze(product)
product['inStock'] = true;
console.log(product);


///// JSON Data
[{
    "name": "John",
    "age": 24
}]

/// Converting a JS Object into JSON String
console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person));

person2 = JSON.stringify(person);

/// Convert JSON to a JS Object
person2_obj = JSON.parse(person2);
console.log(typeof person2_obj);
*/
/// Objects are References 
// Stack -- Stores Primitives; Creates a Copy 
// Heap -- Stores NonPrimitives; Creates References
/*
let user1 = 'Joe';
let user2 = user1;

console.log(user1);
console.log(user2);

user2 = 'Amy'; //Doesn't Change user1
console.log(user1);
console.log(user2);

let user_obj1 = {
    email: 'joe@gmail.com',
    age: 23
}

let user_obj2 = user_obj1;
console.log(user_obj1);
console.log(user_obj2);

user_obj2['age'] = 70; //Changes Both user_obj
console.log(user_obj1);
console.log(user_obj2);
*/

///// Destructuring
const country_obj = {
    population: '300M',
    country: 'USA',
    
    year: 2020,
    cities: ['NYC', 'LA']
}

//const country = country_obj['country'];
//console.log(country);

//const {country: cntry} = country_obj;
//console.log(cntry);

// ... --> Rest Operator (left)
const {country, population, ...restVars} = country_obj;
console.log(country);
console.log(population);
console.log(restVars);

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}

// ... --> Spread Operator (Right)
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const obj4 = {...obj1, ...obj2, key5: "value5"};
console.log(obj4);

const obj5 = {..."abc"};
console.log(obj5);

const obj6 = {...["Item1", "Item2"]}
console.log(obj6);

