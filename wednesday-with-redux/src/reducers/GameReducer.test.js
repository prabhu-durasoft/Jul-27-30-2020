import {GameReducer} from './GameReducer';

it("should return default state for no action", () => {
    const state = GameReducer({}, {});
    expect(state).toBeTruthy();
});

it("should return default state with props for no action", () => {
    const defaultState = { target: 77, attempts: 0, message: ''};
    const state = GameReducer(defaultState, {});
    expect(state).toEqual(defaultState);
});

it("should return message Aim Higher", () => {
    const defaultState = { target: 77, attempts: 0, message: ''};
    const state = GameReducer(defaultState, {type: 'GAME_PLAY_ACTION', payload: { guess: 50 }});
    expect(state.target).toBe(77);
    expect(state.message).toBe('Aim Higher');
});

it("should return message Aim Lower", () => {
    const defaultState = { target: 77, attempts: 0, message: ''};
    const state = GameReducer(defaultState, {type: 'GAME_PLAY_ACTION', payload: { guess: 80 }});
    expect(state.message).toBe('Aim Lower');
});

it("should return attempts 1", () => {
    const defaultState = { target: 77, attempts: 0, message: ''};
    const state = GameReducer(defaultState, {type: 'GAME_PLAY_ACTION', payload: { guess: 80 }});
    expect(state.attempts).toBe(1);
});

it("should return You've got it", () => {
    const defaultState = { target: 77, attempts: 1, message: ''};
    const state = GameReducer(defaultState, {type: 'GAME_PLAY_ACTION', payload: { guess: 77 }});
    expect(state.message).toBe("You've got it in 2 attempts");
});