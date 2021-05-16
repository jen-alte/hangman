//The array of words to be guessed
const wordPool = ["splendid", "preposterous", "humorous", "terminology", "baroque", "eclipsed", "surrounded", "galvanize", "crystalline", "repetition", "scoundrel", "oceanology", "vociferous", "xenophobia"]

//Selects a random word to be guessed

const wordIndex = Math.floor(Math.random() * wordPool.length);

const word = wordPool[wordIndex];

//Split the word into substrings by character

const letterArray = word.split("");

/* Iterative testing
console.log(wordPool);
console.log(wordIndex);
console.log(letterArray);*/

//Set up divs to be placeholders for letters in word

//All possible letters of the alphabet
const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

//Page elements
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// Clear any prior messages
messageElement.innerText = '';

//Setup the textbox
//Clear the textbox
typedValueElement.value = '';

//Set focus
typedValueElement.focus();

// Creates an array of span elements on which to set a class
const letterSpan = letterArray.map(function (letterArray) { return `<span>${word} </span>`});

//Convert letters into a string and set as innerHTML on quote display
const yourWordElement = getElementById('yourWord');
yourWordElement.innerHTML = letterSpan.join('');

typedValueElement.addEventListener('input', () => {

    //Get the current value
    const typedValue = typedValueElement.value;

    //Check if typedValue is contained in alphabet array. If not, display messageIf typedValue is contained in letterArray, display every instance of the letter in typedValue as innerText in div #yourWord; otherwise, display typedValue in div #incorrectLetters;




