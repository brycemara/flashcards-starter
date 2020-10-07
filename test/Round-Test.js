
const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;
  let guess1;
  let guess2;
  let turn;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    guess1 = 'array';
    guess2 = 'object';
    turn = new Turn(guess1, round.currentCard)

  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    expect(round.deck).to.be.equal(deck.cards);
  });

  it('should have a currentCard', function() {
    expect(round.returnCurrentCard()).to.be.equal(card1);
  });

  it('should start with no turns', function() {
    expect(round.turns).to.be.equal(0);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', function() {
  expect(round.returnCurrentCard()).to.be.equal(card1);
  });

  it('should be able to take a turn', function() {
  round.takeTurn(guess1)

  expect(turn).to.be.an.instanceof(Turn);
  expect(round.turns).to.be.equal(1);
  });

  it('should take current card from deck when taking a turn', function() {
  round.takeTurn(guess1);

  expect(round.deck.length).to.be.equal(2);
  expect(round.returnCurrentCard()).to.be.equal(card2);
  });

  it('should check answer and give feedback', function() {
  let test1 = round.takeTurn(guess1);
  let test2 = round.takeTurn(guess2);

  expect(test1).to.be.equal('incorrect!');
  expect(test2).to.be.equal('correct!');
  });

  it('should be able to calculate percent correct', function() {
    let test1 = round.takeTurn(guess1);
    let test2 = round.takeTurn(guess2);

    expect(round.calculatePercentCorrect()).to.be.equal(50)
    expect(round.endRound()).to.be.equal(console.log('**Round over!** You answered 50% of the questions correctly!'))
  })
});
