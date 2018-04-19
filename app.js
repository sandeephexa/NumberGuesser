/*
Game functiion

- player should guess number from 1 to 10
- player should be notified if he/she gets correct or wrong answer
- player should be notified remaining number of attempts
- player should be able to restart the game

*/

// game values

let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = getRandomNum(min,max);

    // UI elements

    const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guess-btn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message');

     // Assign UI min and max
     minNum.textContent = min;
     maxNum.textContent = max;
//play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className == "play-again"){
    window.location.reload();
    }
})
// listen to guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //  validate guess
    if(isNaN(guess) || guess < min || guess > max)
    {
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
    }
    // check if won
    if(guess == winningNum){
        // game won
        gameOver(true,`${winningNum} is correct, you've won !`);
    }
    else{
       // wrong number
       guessesLeft -= 1;
       // game over
       if(guessesLeft === 0)
       {
           // game over
        gameOver(false,`Game Over ! You've lost. The correct number was ${winningNum}`);
       }
       else{
           // game continue
             // change border color
        guessInput.style.borderColor = 'red';
        // clear input
        guessInput.value == '';
        // tell the user its wrong number
        setMessage(`${guess} is wrong. You've ${guessesLeft} guesses left.`,'red');
       }
    }
});

// game over
function gameOver(won,msg)
{
    let color;
    won === true ? color = 'green' : color = 'red'
       // disable guess input
       guessInput.disabled = true;
       // change border color
       guessInput.style.borderColor = color;
       // set message color
       message.style.color = color;
       // send message
       setMessage(msg);

       // play again
       guessBtn.value = 'Play Again';
       guessBtn.className += 'play-again';
}

// get random number
function getRandomNum(min,max){
    return (Math.floor(Math.random() * (max - min+1) + min))
}

// set message
function setMessage(msg,color){
    message.style.color = color
    message.textContent = msg;
    }







