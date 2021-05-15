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



