const Turn = require('./Turn.js');
class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  takeTurn(guess) {
    this.turns += 1;
    let topCard = this.deck[0];
    const turn = new Turn(guess, topCard);
    this.deck.shift();
    return turn.giveFeedback();
  }
}

module.exports = Round;
