class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(turn) {
    this.turns += 1;
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    return turn.giveFeedback()
  }
}

module.exports = Round;
