class Turn {
  constructor(guess, objCard) {
    this.guess = guess;
    this.card = objCard;
  }
  returnGuess(){
    return this.guess;
  }
 }

module.exports = Turn;
