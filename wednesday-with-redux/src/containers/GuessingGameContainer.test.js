import React from 'react';
import Enzyme, { shallow, mount } from  'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GuessingGameContainer from './GuessingGameContainer';
import configureStore from 'redux-mock-store';
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
it("should render attempts and message on button click", () => {
    const store = createStore(GameReducer, {
        target: 77,
        attempts: 0,
        message: ''
    });

    const wrapper = mount(<GuessingGameContainer store={store}/>);
    const guessTB = wrapper.find('input[type="text"]');
    guessTB.simulate('change', { target: {value: '50'}});
    const button = wrapper.find('button');
    button.simulate('click');
    const attempts = wrapper.find('h1[data-test="attempts"]');
    expect(attempts.text()).toBe("Attempts: 1");
    const message = wrapper.find('h1[data-test="message"]');
    expect(message.text()).toBe("Aim Higher");
});

it("should render Aim Lower on button click", () => {
    const store = createStore(GameReducer, {
        target: 77,
        attempts: 0,
        message: ''
    });

    const wrapper = mount(<GuessingGameContainer store={store}/>);
    const guessTB = wrapper.find('input[type="text"]');
    guessTB.simulate('change', { target: {value: '80'}});
    const button = wrapper.find('button');
    button.simulate('click');
    const message = wrapper.find('h1[data-test="message"]');
    expect(message.text()).toBe("Aim Lower");
});

//This test should fail only because of the code in GuessingGameContainer class
//Should not fail if something goes wrong in the store or reducer
//That;s the need of mocking store
it("should render Aim Lower on button click with mockstore", () => {
    const mockStore = configureStore();
    const store = mockStore({
        target: 77, attempts: 1, message: "Aim Lower"
    });

    const wrapper = mount(<GuessingGameContainer store={store}/>);
    const guessTB = wrapper.find('input[type="text"]');
    guessTB.simulate('change', { target: {value: '80'}});
    const button = wrapper.find('button');
    button.simulate('click');
    const message = wrapper.find('h1[data-test="message"]');
    //I am testing whether the value coming out of the 
    //real or mocked store is set on message h1

    expect(message.text()).toBe("Aim Lower");
    const attempts = wrapper.find('h1[data-test="attempts"]');
    expect(attempts.text()).toBe("Attempts: 1");
});


