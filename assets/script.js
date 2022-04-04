let selectedIndex = 0;
let guesses = 1;
let guessedWord ="";
let guessedLetters =[];
let letters = []

letters = document.getElementsByClassName("letter");

function performAddLetter(guessNumber, letter) {
    let indexes = document.getElementById(guessNumber).children;
    indexes[selectedIndex].innerHTML = String(letter);
    guessedWord += letter;
    guessedLetters.push(letter);
    console.log(guessedWord);
    console.log(selectedIndex);
};

function addLetter(evnt) {
    let letter = evnt.target.textContent;
    if (selectedIndex <=5 ){
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
for (let i = 0; i < letters.length; i++){
    letters[i].addEventListener('click', addLetter)
}
// for (let letter of letters){
//     letter.addEventListener("click", addLetter(letter.textContent))
//     console.log(letter.textContent)
