const GuessingGame = require('./guessing-game');

it("should not be null", () => {
    const game = new GuessingGame();
    expect(game).toBeTruthy();
});

it("should generate random number between 1 and 100", () => {
    const game = new GuessingGame();
    expect(game.target).toBeGreaterThan(0);
    expect(game.target).toBeLessThan(100);
});

it("should generate Aim Higher", () => {
    const game = new GuessingGame();
    game.target = 77;
    game.play(50);
    const message = game.message;
    expect(message).toBe("Aim Higher");

});