const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  let card1;
  let card2;
  let turn1;
  let turn2;
  let turn3;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('array', card1);
    card2 = new Card(1, 'Whats my name?', ['bryce', 'brice'], 'bryce')
    turn2 = new Turn('object', card2);
    turn3 = new Turn('object', card1);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {

    expect(turn1.guess).to.equal('array');
    expect(turn2.guess).to.equal('object');
  });

  it('should store a card', function() {

    expect(turn1.card).to.equal(card1);
    expect(turn2.card).to.equal(card2);
  });

  it('should be able to return the guess', function() {

    expect(turn1.returnGuess()).to.equal(turn1.guess);
    expect(turn2.returnGuess()).to.equal(turn2.guess);
  });

  it('should be able to return the card', function() {

    expect(turn1.returnCard()).to.equal(turn1.card);
  });

  it('should be able to evaluate the guess', function() {

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback', function() {

    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn3.giveFeedback()).to.equal('correct!');
  });
});
