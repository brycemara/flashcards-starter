
const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);

    expect(round.deck).to.be.equal(deck);
  });

  it('should have a currentCard', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);

    expect(round.currentCard).to.be.equal(card1);
  });

  it('should start with no turns', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);

    expect(round.turns).to.be.equal(0);
  });

  it('should start with no incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  let cards = [card1, card2, card3]
  const deck = new Deck(cards);

  const round = new Round(deck);

  expect(round.returnCurrentCard()).to.be.equal(card1);
});
});
