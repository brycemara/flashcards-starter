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
 }

module.exports = Turn;
