let selectedIndex = 0; //used to track what box the user is inputting a letter too
let guesses = 1;
let guessedWord = ""; //the user input word
let guessedLetters = []; //used to iterate
let word = ""; //The word to guess

var fs = require('fs');
var text = fs.readFileSync("./mytext.txt", 'utf-8');
var textByLine = text.split('\n')

const wordList = ['aahed', 'stays', 'hello', 'words', 'sword', 'clone', 'those', 'slave', 'stool', 'bytes', 'silly', 'spore', 'shore', 'index', 'style', 'creed', 'trust', 'tryst', 'scare', 'share', 'where', 'splay'];

//get random word
function selectWord(wordList) {
    let i = Math.floor(Math.random() * wordList.length)
    console.log[i]
    return wordList[i].toUpperCase();
}
//to set up the game on start up
function onDocLoad() {
    word = selectWord(wordList);
    console.log(word);
}

//Calls the relevant function
function checkAnswer() {
    if (guessedWord === word) {
        correctWord();
    } else if (guessedWord != word) {
        incorrectWord();
    }
}
//Calls the function to change the index color
function correctWord() {
    console.log('You Won');
    changeColor("correct")
}
//Calls the function to change the index color
function incorrectWord() {
    changeColor("incorrect")
    guesses++;
    clearVariables();
}
//used to reset the incrementation variables between guesses
function clearVariables() {
    selectedIndex = 0;
    guessedLetters = [];
    guessedWord = "";
}
//change the index color to green for correct place or yellow for contained in the word but not correct index
function changeColor(result) {
    let indexes = document.getElementById(`Guess${guesses}`).children;
    if (result === 'correct') {
        for (let i = 0; i < 5; i++) {
            indexes[i].style.backgroundColor = 'green';
        }
    } else if (result === 'incorrect') {
        for (let i = 0; i < 5; i++) {
            if (guessedLetters[i] === word[i]) {
                indexes[i].style.backgroundColor = 'green';
            } else if (word.includes(guessedLetters[i])) {
                indexes[i].style.backgroundColor = 'yellow';
            }
        }
    }
}
//Adds the selected letter to the selected index and builds the guessed word
function performAddLetter(guessNumber, letter) {
    let indexes = document.getElementById(guessNumber).children;
    indexes[selectedIndex].innerHTML = String(letter);
    guessedWord += letter;
    guessedLetters.push(letter);
};
//removes letter from letters array, guessed word string and the last selected index on the GUI
function performBackspace(guessNumber) {
    let indexes = document.getElementById(guessNumber).children
    guessedWord.slice(0, -1);
    guessedLetters.pop();
    indexes[selectedIndex].innerHTML = " ";
}

//calls the function to remove the selected index from UI and array, depending on guess number
function backspace() {
    if (selectedIndex > 0) {
        selectedIndex--;
    }
    switch (guesses) {
        case 1:
            performBackspace("Guess1");
            break;
        case 2:
            performBackspace("Guess2");
            break;
        case 3:
            performBackspace("Guess3");
            break;
        case 4:
            performBackspace("Guess4");
            break;
        case 5:
            performBackspace("Guess5");
            break;
        default:
            lostgame;
    }
}

//calls the addLetter function on the correct guess row
function addLetter(evnt) {
    let letter = evnt.target.textContent;
    if (selectedIndex < 5) {
        switch (guesses) {
            case 1:
                performAddLetter("Guess1", letter);
                break;
            case 2:
                performAddLetter("Guess2", letter);
                break;
            case 3:
                performAddLetter("Guess3", letter);
                break;
            case 4:
                performAddLetter("Guess4", letter);
                break;
            case 5:
                performAddLetter("Guess5", letter);
                break;
        }
    }
    if (selectedIndex < 5) {
        selectedIndex++
        console.log(selectedIndex)
    };


}

//loads backspace function on the backspace button on keyboard 
let backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', backspace)


//loads click function onto every button on the keyboard
letters = document.getElementsByClassName("letter");
for (let letter of letters) {
    letter.addEventListener('click', addLetter)
};
//calls the game load function on dom load
document.addEventListener('DOMContentLoaded', onDocLoad, false)

//Loads enter function onto the enter button on Keyboard
let enter = document.getElementById("enter");
enter.addEventListener('click', checkAnswer);