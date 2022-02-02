'use strict';

// Generate a random number, set the score to 20, and set high score to 0 at the start. 
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display message function, initial message is `Start guessing...`
let displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}

// Event handler for the `Check` button 
document.querySelector(`.check`).addEventListener(`click`, function () {

    // Assinging the users guess to a variable called "guess"
    const guess = Number(document.querySelector(`.guess`).value);

    // Logic to test the guess //

    // If what the user entered is not a number
    if (!guess) {
        displayMessage(`No number!`);
    }
    // When player wins
    else if (guess === number) {
        displayMessage(`Correct Number!`);
        document.querySelector(`.number`).textContent = number;

        // stylings
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;

        // High score logic
        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
    }
    // When guess is wrong, determine if too high or too low
    else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? `Too High` : `Guess is too low`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            displayMessage(`Ran out of tries, game over! The correct number was ${number}`);
            document.querySelector(`.score`).textContent = 0;
        }
    }
})

// Event handler for the `Again` button

document.querySelector(`.again`).addEventListener(`click`, function () {
    // Generate a new secret number
    number = Math.trunc(Math.random() * 20) + 1;
    // Reset score to 20
    score = 20;
    // Reset body background, number width, and text
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    displayMessage(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;
});


