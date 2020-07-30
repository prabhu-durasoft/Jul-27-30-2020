import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { GuessingGameComponent } from './GuessingGameComponent';
import { GuessingGame } from './GuessingGame';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Basic UI and state tests", () => {
    let component;
    let button;
    let attemptsHeader;
    let messageHeader;
    let guessTB;

    beforeEach(() => {
        component = shallow(<GuessingGameComponent/>);
        button  = component.find('button');
        guessTB = component.find('input[type="text"]');
        attemptsHeader = component.find('h1[data-test="attempts"]');
        messageHeader = component.find('h1[data-test="message"]');
    });

    it("should render component", () => {
        expect(component).toBeTruthy();
    });

    it("should have attempts as 0 in the beginning", () => {
        let game = { attempts: 0 };
        component.setState({game});
        expect(attemptsHeader.text()).toBe("Attempts: 0");
    });

    it("should have message as blank in the beginning", () => {
        let game = { message: "" };
        component.setState({game});
        expect(messageHeader.text()).toBe("");
    });

    it("should call play when button is clicked", () => {
        let game = { message: "", play: jest.fn() };
        //setting the game to hold a mock instead of new GuessingGame()
        component.setState({game}); 
        button.simulate("click");
        button.simulate("click");
        button.simulate("click");
        button.simulate("click");
        button.simulate("click");
        expect(game.play).toHaveBeenCalledTimes(5);
    });

    it("should call play in the real object when button is clicked", () => {
        const game = component.state("game"); //getState("game")
        //spy on the "play" method on the "game" object
        const playSpy = jest.spyOn(game, "play");
        button.simulate("click");
        expect(playSpy).toHaveBeenCalled();
    });


    it("should return a value", () => {
        let random = jest.fn();
        random.mockReturnValueOnce(100);
        const value = random();
        expect(value).toBe(100);

        let inc = jest.fn(x => x + 1);
        expect(inc(1)).toBe(2);
        expect(inc(11)).toBe(12);


    });





});    