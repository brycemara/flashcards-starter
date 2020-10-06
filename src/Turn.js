
class Turn {
  constructor(guess, objCard) {
    this.guess = guess;
    this.card = objCard;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    switch (this.guess) {
      case this.card.correctAnswer :
        return true;
      break;
      default :
        return false;
    };
  }
  giveFeedback() {
    switch (this.guess) {
      case this.card.correctAnswer :
        return `Your answer of ${this.guess} is correct!`;
      break;
      default :
        return `Your answer of ${this.guess} is incorrect!`;
    };
  }
 }

module.exports = Turn;
