let randumNumber = parseInt((Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
   if (guess === "" || guess < 0 || isNaN(guess)){
        alert(`Please enter a valid Number! : ${guess}`);
    } else if ( guess < 1 ){
        alert(`Please enter a valid Number! : more than 1`);
    } else if ( guess > 100 ){
        alert(`Please enter a valid Number! : less than 100`);
    } else {
        prevGuess.push(guess);
        if (numGuess  === 10) {
            displayGuess(guess);
            displayMessage(`Game Over!, Random Number was ${randumNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randumNumber) {
        displayMessage(`Ya HOo!, You Guessed it Right. ${randumNumber}`);
        endGame();
    } else if (guess < randumNumber) {
        displayMessage(`Oh NOo!, You Guess it TOo Low.`);
    } else if (guess > randumNumber) {
        displayMessage(`Oh NOo!, You Guess it TOo High.`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess = numGuess + 1;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML =`<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = `<span id="newGame">Start New Game</span>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

function newGame() {
    const newStartBtn = document.querySelector('#newGame');
    newStartBtn.addEventListener('click', function(e) {
        randumNumber = parseInt((Math.random()*100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ``;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(para);

        playGame = true;
    });
}





