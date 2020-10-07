
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
    switch (this.evaluateGuess()) {
      case true :
        return `correct!`;
      break;
      default :
        return `incorrect!`;
    };
  }
 }

module.exports = Turn;
