class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    console.log(this.currentCard)
    return this.currentCard;
  }
}

module.exports = Round;
