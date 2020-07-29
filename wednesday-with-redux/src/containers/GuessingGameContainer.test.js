import React from 'react';
import Enzyme, { shallow, mount } from  'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GuessingGameContainer from './GuessingGameContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

import {GameReducer} from '../reducers/GameReducer';
import {createStore} from 'redux';

it("should render properly", () => {
    const store = createStore(GameReducer);
    const component = mount(<GuessingGameContainer store={store}/>);
    //console.log(component.debug());
    expect(component).toBeTruthy();
});

//Mocking helps testing entities in ISOLATION
it("should render attempts on button click", () => {
    const store = createStore(GameReducer);
    // MOCKING STORE
    const component = mount(<GuessingGameContainer store={store}/>);
    const guessTB = component.find('input[type="text"]');
    guessTB.simulate('change', { target: {value: '50'}});
    const button = component.find('button');
    button.simulate('click');
    const attempts = component.find('h1[data-test="attempts"]');
    expect(attempts.text()).toBe("Attempts: 1");
    const message = component.find('h1[data-test="message"]');
    expect(message.text()).toBe("Aim Higher");
});