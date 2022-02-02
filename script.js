'use strict';
// Will write to the console the text of the "message" class and the "between" class in the HTML document

/*
console.log(document.querySelector(`.message`).textContent);
console.log(document.querySelector(`.between`).textContent);
*/

// ===== What's the DOM an DOM manipultion lecture ===== 
// DOM is the Document Object Model: strucuted representation of HTML document
// Allows JS to access HTML elements and styles to manipulate them
// Connection between HTML and JS 
// Document is the entry point to DOM `document.querySelector()`
// DOM Methods and properties for DOM Manipulation are NOT apart of JS, but are a web API 
// Web API and JavaScript can interact with one another, which is why we can use DOM in JS

// ===== Selecting and manipulating Elements =====

/*
document.querySelector(`.message`).textContent = `Correct Number!`; // Changes the text content of the message class to `Correct Number!` 

document.querySelector(`.number`).textContent = 13; // Changes the content of the number class to 13
document.querySelector(`.score`).textContent = 10; // changes the content of the score class to 10 
console.log(document.querySelector(`.guess`).value); //.value reads the value of the class, in this case .guess (which is currently empty)
*/

// ===== Handling Click Events/Implementing Game Logic lecture =====
// We will have to use an event listener to wait for a certain event to happen
// In order to listen for events, we first need to select the element where the event should happen. 
// We want to listen to the button element for a click 

// Selected the button via the `check` class, added and event listener listening for a `click`, the event handler (function) then logs the value of the `guess` class to the console

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}


document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    // This will be saved as a STRING not a number, so we use Number() to conver it to a number

    if (!guess) { //This handles the field if no number is entered
        //document.querySelector(`.message`).textContent = `No number!`;
        displayMessage(`No number!`);
    } else if (guess === number) { // When player wins
        // document.querySelector(`.message`).textContent = `Correct Number!`;
        displayMessage(`Correct Number!`);
        document.querySelector(`.number`).textContent = number;
        // Using DOM to manipulate styling, these are in-line and don't effect the CSS file
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;

        // High score logic
        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
        // When guess is wrong, determine if too high or too low
    } else if (guess !== number) {
        if (score > 1) {
            // document.querySelector(`.message`).textContent = guess > number ? `Too High` : `Guess is too low`;
            displayMessage(guess > number ? `Too High` : `Guess is too low`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            // document.querySelector(`.message`).textContent = `Ran out of tries, game over! The correct number was ${number}`;
            displayMessage(`Ran out of tries, game over! The correct number was ${number}`);
            document.querySelector(`.score`).textContent = 0;
        }
    }
})

// ===== Coding Challenge =====
/*
1. Select the element with the 'again' class and attach a clickeventhandler 
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original backgroundcolor (#222) and number width (15rem)

*/

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


