const { greet, add, greetInCaps } = require('./hello');

describe("hello world tests", () => {
    it("should print hello world", () => {
        const message = greet();
        expect(message).toBe("hello world");
    });
    it("should print hello world in uppercase", () => {
        const message = greetInCaps();
        expect(message).toBe("HELLO WORLD");
    });
});

describe("number tests", () => {
    it("should add to 5", () => {
        const sum = add(2, 3);
        expect(sum).toEqual(5);
    });
});

//jest --watchAll
