const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Promise Task Complete');
        resolve();
    }, 1000)
});

// Handle the Promise
promise.then(() => {
    console.log('Promise Consumed...');
});

console.log('Hello from Global Scope');

// Calling 'Then' directly on New Promise
new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Promise Task Complete');
        resolve();
    }, 1000)
}).then(() => {
    console.log('Promise Consumed...');
});

// Returning Data from Promise
new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Promise Task Complete');
        resolve({name: 'John', age: 36});
    }, 1000)
}).then((user) => {
    console.log(user);
});

// Reject a Promise in case of Error

new Promise((resolve, reject) => {
    setTimeout( () => {
        let error = true;
        if(!error) {
            resolve({name: 'John', age: 36});
        } else {
            reject('Error: Something Went Wrong');
        }
    }, 1000);
}).then((user) => {
    console.log(user);
}).catch(error => console.log(error))
.finally(() => console.log('Promise has been either Resolved or Rejected'));

// Promise Chaining
new Promise((resolve, reject) => {
    setTimeout( () => {
        let error = true;
        if(!error) {
            resolve({name: 'John', age: 36});
        } else {
            reject('Error: Something Went Wrong');
        }
    }, 1000);
}).then(user => {
    console.log(user);
    return user.name;
}).then(name => {
    console.log(name);
    return name.length;
}).then(nameLen => {
    console.log(nameLen);
})