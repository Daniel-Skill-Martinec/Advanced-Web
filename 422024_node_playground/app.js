/*
console.log('From Node Playground');

async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);
}
//getUser();

const {message, lowerWords} = require('./utils');
console.log(message);
console.log(message.text);
console.log(lowerWords('HI'));
*/
const axios = require('axios');

async function getPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
}
getPosts();