function fetchUser() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');
    userDisplay.innerHTML = `
        <div>
            <img src="${user.picture.large}"/>
            <div>
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
                <p>Age: ${user.dob.age}</p>
            </div>
        </div>
    `
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data.slice(0, 5)))
}

function displayPosts(posts) {
    const postsDisplay = document.querySelector('#posts');
    postsDisplay.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
        postsDisplay.appendChild(postDiv);
    });
}

document.querySelector('#js-generate').addEventListener('click', fetchUser);


fetchPosts();
