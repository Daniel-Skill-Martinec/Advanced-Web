/*
fetch('./movies.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});

//  Shortened
fetch('./movies.json')
    .then(response => response.json())
    .then(data => console.log(data));
*/


// Getting 30 Github Users
fetch('https://api.github.com/users')
    .then(Response => Response.json())
    .then(data => console.log(data))

// Getting Data on Me ;)
fetch('https://api.github.com/users/Daniel-Skill-Martinec')
    .then(Response => Response.json())
    // .then(data => console.log(data))
    .then(data => document.querySelector('h1').textContent = data.login)
