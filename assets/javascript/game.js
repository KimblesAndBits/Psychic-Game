var psychic = {
    wins: 0,
    losses: 0,
    guessCount: 0,
    guessesLeft: 9,
    userGuess: [],
    compChoice: "n",
    characterList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    choose: function() {
        return (this.characterList[Math.floor(Math.random() * 26)]);
    },
    guess: function(user) {
        if (this.guessesLeft > 1) {
            if (user === this.compChoice) {
                alert(`You got it! It was ${this.compChoice}!`);
                this.wins++;
                this.compChoice = this.choose();
                this.guessesLeft = 9;
                this.guessCount = 0;
                this.userGuess = [];
                document.getElementById("guesses-left").style.borderColor = "greenyellow";
            } else {
                this.guessesLeft--;
                this.userGuess[this.guessCount] = user;
                this.guessCount++;
                if (this.guessesLeft < 6 && this.guessesLeft > 3){
                    document.getElementById("guesses-left").style.borderColor = "orange";
                }
                else if(this.guessesLeft < 3){
                    document.getElementById("guesses-left").style.borderColor = "red";
                }
            }
        } else {
            this.losses++;
            this.compChoice = this.choose();
            this.guessesLeft = 9;
            this.guessCount = 0;
            this.userGuess = [];
            alert("Sorry, you didn't get it!")
            document.getElementById("guesses-left").style.borderColor = "greenyellow";

        }
    },
    reWrite: function() {
        var guessesString = "";
        document.getElementById("wins").textContent = `Number of wins: ${this.wins}`;
        document.getElementById("losses").textContent = `Number of losses: ${this.losses}`;
        document.getElementById("guesses-left").textContent = `Number of guesses left: ${this.guessesLeft}`;
        for(i = 0; i < psychic.guessCount; i++) {
            guessesString = guessesString + psychic.userGuess[i] + " ";
        }
        document.getElementById("guesses").textContent = `Guesses so far: ${guessesString}`;
    },
};

psychic.compChoice = psychic.choose();

document.onkeyup = function(event) {
    var newGuess = event.key.toLowerCase();
    psychic.guess(newGuess);
    psychic.reWrite();
};