//Robert Zuniga

// requiring a word module exported from Word.js & letter.js

var Letter = require("./Letter.js");
var Word = require("./Word.js");

// begin code

var Word = require("./Word.js");

// Create a 'new' letter object from our blueprint i.e. constructor Letter
var myLetter = new Letter('z');

// Guess a character
myLetter.guessCharacter('a');

// Get the character
result = myLetter.getCharacter();
console.log(result);

// Guess a character
myLetter.guessCharacter('z');

// Get the character
result = myLetter.getCharacter();
console.log(result);

// Create a word object
var myWord = new Word('awesome');
// var result = myWord.toString();
console.log(myWord.toString());