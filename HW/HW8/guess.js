let playGame = true;

while (playGame) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;

    alert("I Have Chosen A Random Number Between 1 And 100. Try To Guess It.");

    while (attempts > 0) {
        const userGuess = parseInt(prompt(`Attempts Left: ${attempts}\nEnter Your Guess (Between 1 and 100):`));

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please Enter A Valid Number Between 1 And 100.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert("Congratulations! You Guessed The Correct Number!");
            break;
        } else {
            if (userGuess > randomNumber) {
                alert("Too High. Try Again.");
            } else {
                alert("Too Low. Try Again.");
            }
            attempts--;
        }
    }

    const playAgain = prompt("Do You Want To Play Again? (Type 'Yes' To Play Again)").toLowerCase();
    playGame = playAgain === 'yes';
}

alert("Thanks For Playing! Goodbye.");
