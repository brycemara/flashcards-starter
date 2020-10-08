const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should be able to start a game', function() {
    const game = new Game();
    game.start()
    // expect the game to start
  })
});
