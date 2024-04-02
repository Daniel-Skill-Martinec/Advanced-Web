setTimeout(function() {
    console.log('Timeout');
    console.log('After Timeout');
}, 3000);

// Asyncronous (Not Waiting for the Timeout Above)
console.log('Not Waiting for Timeout');

const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
];

function getPosts(){
    setTimeout(() => {
        posts.forEach(function(post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000);
}

// getPosts();

// The Timing Makes it so it won't be created

// Adding the new funtion "cb" makes the code run diregarding the slower time. "cb" can be called anything.
function createPost(post, cb){
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 3000);
}
createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);

// getPosts();