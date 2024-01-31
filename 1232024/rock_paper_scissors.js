function randHand(){
    randNum = Math.random();
    if(randNum >= 0 && randNum < 1/3){
        computerMove = 'Rock';
    } else if (randNum >= 1/3 && randNum < 2/3){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
    console.log(computerMove)
}