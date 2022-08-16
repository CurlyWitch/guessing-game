class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.guessValue = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessValue = this.min + Math.ceil( (this.max - this.min) / 2 );
        return this.guessValue;
    }

    lower() {
        this.max = this.guessValue;
    }

    greater() {
        this.min = this.guessValue;
    }
}

module.exports = GuessingGame;
