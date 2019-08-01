//Robert Zuniga
// requiring a Letter module exported from Letter.js
var Letter = require("./Letter.js");

// begin code

function Word(wordToBeGuessed) {

    // This object will store an array of Letter objects
    this.lettersInThisWord = [];
    this.wordToBeGuessed = wordToBeGuessed;

    // Split the word to be guessed into an array of letters
    // [ 'a', 'w', 'e' ... ]
    var lettersInWordToBeGuessed = wordToBeGuessed.split('');

    // NOW, initialize an array of our Letter objects with the letters
    // split out from the word to be guessed
    for (var letter of lettersInWordToBeGuessed) {
        this.lettersInThisWord.push(new Letter(letter));
    }

    // Print out the Letters array to the console
    this.toString = function () {
        var theWord = '';
        for (var letter of this.lettersInThisWord) {
            theWord += letter.getCharacter();
        }
        return theWord;
    }
}

//Exporting the Word constructor
//Required in index.js
module.exports = Word;