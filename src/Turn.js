
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
    return (this.guess === this.card.correctAnswer) ? true : false;
  }
  giveFeedback() {
    return (this.evaluateGuess()) ? 'correct!' : 'incorrect!';
  };
}


module.exports = Turn;
