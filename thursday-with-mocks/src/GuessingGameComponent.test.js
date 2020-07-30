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
});    