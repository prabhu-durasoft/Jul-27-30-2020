const GuessingGame = require('./guessing-game');

let game = null;

beforeEach(() => {
    game = new GuessingGame();
});

afterEach(() => {
    game = null;
});

it("should not be null", () => {
    expect(game).toBeTruthy();
});

it("should generate random number between 1 and 100", () => {
    expect(game.target).toBeGreaterThan(0);
    expect(game.target).toBeLessThan(100);
});

it("should generate Aim Higher", () => {
    game.target = 77;
    game.play(50);
    const message = game.message;
    expect(message).toBe("Aim Higher");
});

it("should generate Aim Lower", () => {
    game.target = 77;
    game.play(80);
    const message = game.message;
    expect(message).toBe("Aim Lower");
});

it("should have 0 attempts in the beginning", () => {
    expect(game.attempts).toBe(0);
});

it("should have attempts as 2", () => {
    game.target = 77;
    game.play(50);
    game.play(75);
    expect(game.attempts).toBe(2);
});

it("should complete the game", () => {
    game.target = 77;
    game.play(50);
    game.play(77);
    expect(game.message).toBe("You've got it in 2 attempts");
});

describe("error cases", () => {
    it("should not allow to play the game after it's over", () => {
        game.target = 77;
        game.play(50);
        game.play(77);
        expect(() => {
            game.play(78);
        }).toThrow("Game is already over");
    });
    
    it("should validate invalid input", () => {
        game.target = 77;
        expect(() => {
            game.play("32o4973249732");
        }).toThrow("Invalid input");
    });
});

