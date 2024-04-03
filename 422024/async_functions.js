/*
const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(
            {
                name: 'John',
                age: 32
            }
        )
    }, 1500)
});

// promise.then( data => console.log(data));

async function getPromise() {
    const response = await promise;
    console.log(response);
}

// getPromise();

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

getUsers();

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    console.log(data);
}

getPosts();
*/

// TRY/CATCH for error handling in async await
const getUsers1 = async () => {
    try {
        const response = await fetch('https://httpstat.us/404');
        const data = await response.text();

        if(!response.ok) {
            throw new Error('Request Failed');
        }
        console.log(data);
    } catch(error) {
        console.log(error);
    }
};

// getUsers1();

try {
    console.log(x);
}catch(error) {
    console.log('Error: ' +error);
}

// console.log(y);

function double(number) {
    if(isNaN(number)) {
        throw new Error('Pwease Gib Numba');
    }
    return number*2
};

// console.log(double(5));
try {
    console.log(double('two'));
} catch(error) {
    console.log(error);
}
console.log('After Error');

console.log(double(2.2));

// const num = double('hello');
// console.log(num/5);

// MULTIPLE PROMISES WITH ASYNC AWAIT
async function getMultipleDataWithFetch() {
    const user_resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const user_data = await response.json();

    const posts_resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts_data = await resp.json();

    const comments_resp = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments_data = await comments_resp.json();

    console.log(user_data, posts_data, comments_data)
}
// getMultipleDataWithFetch();

async function getMultipleDataWithPromiseAll() {
    // Array Destructuring
    const [user_resp, posts_resp, comments_resp] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    const user_data = await user_resp.json();
    const posts_data = await posts_resp.json();
    const comments_data = await comments_resp.json();
    console.log(user_data, posts_data, comments_data);
}
// getMultipleDataWithPromiseAll();

async function getMultipleDataWithPromiseAllThen() {
    // Array Destructuring
    const [user_data, posts_data, comments_data] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then( res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then( res => res.json())
    ]);

    console.log(user_data, posts_data, comments_data);
}
getMultipleDataWithPromiseAllThen();