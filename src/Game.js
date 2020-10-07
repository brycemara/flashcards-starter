const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }
  start() {
    this.makeNewDeck();
    this.makeNewRound(this.deck)
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  makeNewDeck() {
    let cardDeck = [];
    prototypeQuestions.forEach(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
      cardDeck.push(newCard);
    })
    let deck = new Deck(cardDeck);
    this.deck = deck;
  }
  makeNewRound(deck) {
    this.currentRound = new Round(deck);
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
