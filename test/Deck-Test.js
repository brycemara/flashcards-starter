const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cards = [card1, card2, card3]
    deck = new Deck(cards);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of cards', function() {
    expect(deck.cards).to.equal(cards);
  });

  it('should be able to count amount of cards in deck', function() {
    expect(deck.countCards()).to.be.equal(3);
  });

});
