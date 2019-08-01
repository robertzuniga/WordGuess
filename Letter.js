// Robert Zuniga 
//Constructor function for creating Letter objects

function Letter(characterPassedIn) {
    // console.log('A New Letter is Created');
    // console.log(`The letter passed into the constructor is ${characterPassedIn}`);

    this.character = characterPassedIn;
    this.guessed = false;

    // console.log(`The character stored by this object is ${this.character}`);
    // console.log(`The guessed flag stored by this object is ${this.guessed}`);

    // this.toString = function() {
    //     console.log(`this.character = ${this.character}`);
    //     console.log(`this.guessed = ${this.guessed}`);
    // }

    this.getCharacter = function () {
        if (this.guessed) {
            return this.character;
        } else if (!this.guessed) {
            return '_ ';
        }
    }

    this.guessCharacter = function (characterPassedIn) {
        if (characterPassedIn === this.character) {
            this.guessed = true;
        } else if (characterPassedIn !== this.character) {
            this.guessed = false;
        }
    }
}

//Exporting Letter consrtuctor. 
//Required in Word.js
module.exports = Letter;























//Exporting Letter consrtuctor. 
//Required in Word.js
module.exports = Letter;