const message = {
    id: 1,
    text: 'Hello World'
};

// module.exports = message;

function lowerWords(str) {
    return str.toLowerCase();
};

module.exports = {
    message, 
    lowerWords
};