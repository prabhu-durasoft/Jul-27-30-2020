class GuessingGame {
    constructor() {
        this.target = Math.round(Math.random() * 100);
        this.message = null;
        this.attempts = 0;
        this.gameOver = false;
    }
    play(guess) {
        this.validateGuess(guess);
        this.checkGameOver();
        this.attempts++;
        if (guess < this.target) {
            this.message = "Aim Higher";
        }
        else if (guess > this.target) {
            this.message = "Aim Lower";
        }
        else if (guess === this.target) {
            this.message = `You've got it in ${this.attempts} attempts`;
            this.gameOver = true;
        }
    }

    checkGameOver() {
        if (this.gameOver) {
            throw new Error("Game is already over");
        }
    }

    validateGuess(guess) {
        if (isNaN(guess)) {
            throw new Error("Invalid input");
        }
    }
}
module.exports = GuessingGame;