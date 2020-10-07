const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    let cards = [];
    for (var i=0; prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i])
      cards.push(card);
    }
    let deck = new Deck(cards);
    this.makeNewRound(deck)
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
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
