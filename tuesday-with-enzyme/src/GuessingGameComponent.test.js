import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { GuessingGameComponent } from './GuessingGameComponent';
import { GuessingGame } from './GuessingGame';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Basic UI and state tests", () => {
    let component;
    beforeEach(() => {
        component = shallow(<GuessingGameComponent/>);
    });
    it("should render component", () => {
        expect(component).toBeTruthy();
    });
    it("should have guessinggame in state", () => {
        expect(component.state("game")).toBeInstanceOf(GuessingGame);
    });
    it("should have guess textbox", () => {
        const tb = component.find("input[type='text']");
        expect(tb.length).toBe(1);
    });
    it("should have guess textbox with a placeholder", () => {
        const tb = component.find("input[placeholder='Enter your guess']");
        expect(tb.length).toBe(1);
    });
    it("should have guess button", () => {
        const button = component.find('button');
        expect(button.length).toBe(1);
    });
    it("should have label to display message", () => {
        const h1 = component.find('h1[data-test="message"]');
        expect(h1.length).toBe(1);
    });
    it("should display blank message initially", () => {
        const h1 = component.find('h1[data-test="message"]');
        expect(h1.text()).toBe('');
    });
    it("should have label to display attempts", () => {
        const h1 = component.find('h1[data-test="attempts"]');
        expect(h1.length).toBe(1);
    });
    it("should have attempts as 0", () => {
        const h1 = component.find('h1[data-test="attempts"]');
        const text = "Attempts: 0";
        expect(h1.text()).toBe(text);
    });
});

describe("Event Handling and state tests", () => {
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

    xit("should display attempts as 1 when button is clicked async", async() => {
        guessTB.simulate('change', {target: {value: 50}});
        await button.simulate('click');
        expect(component.state("game").attempts).toBe(1);
        expect(attemptsHeader.text()).toBe("Attempts: 1");
    });
    
    it("should display attempts as 1 when button is clicked", () => {
        guessTB.simulate('change', {target: {value: 50}});
        button.simulate('click');
        expect(component.state("game").attempts).toBe(1);
        setTimeout(() => {
            expect(attemptsHeader.text()).toBe("Attempts: 1");
        }, 0.1);
        
    });
    //1)setState() => added to the event loop queue
    //2) setTimeout() => added to the event loop queue
    //3) setState() is completed which triggers render()
    //4) setTimout() body is executed where the expectations are verified

    it("should display message as Aim Higher when button is clicked", () => {
        component.state("game").target = 77;
        guessTB.simulate('change', {target: {value: 50}});
        button.simulate('click');
        expect(component.state("game").message).toBe("Aim Higher");
        setTimeout(() => {
            expect(messageHeader.text()).toBe("Aim Higher");
        }, 0.1);
        
    });
});




