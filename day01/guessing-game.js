class GuessingGame {
    constructor() {
        this.target = Math.round(Math.random() * 100);
        this.message = null;
    }
    play(guess) {
        if (guess < this.target) {
            this.message = "Aim Higher";
        }
    }
}
module.exports = GuessingGame;