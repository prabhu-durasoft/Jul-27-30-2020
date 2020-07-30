import React from 'react';
import Enzyme, { shallow, mount } from  'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import {GuessingGameComponent} from './GuessingGameComponent';

it("should render properly", () => {
    const component = shallow(<GuessingGameComponent/>);
    expect(component).toBeTruthy();
});

it("should render message and attempts", () => {
    const component = shallow(<GuessingGameComponent 
                            attempts="1" message="Aim Higher"/>);
    const attemptsH1 = component.find("h1[data-test='attempts']");
    const messageH1 = component.find("h1[data-test='message']");    
    expect(attemptsH1.text()).toBe("Attempts: 1");
    expect(messageH1.text()).toBe("Aim Higher");    
});


// //Mocking helps testing entities in ISOLATION
// it("should render attempts on button click", () => {
//     const store = createStore(GameReducer);

//     const wrapper = mount(<GuessingGameContainer store={store}/>);
//     const guessTB = wrapper.find('input[type="text"]');
//     guessTB.simulate('change', { target: {value: '50'}});
//     const button = wrapper.find('button');
//     button.simulate('click');
//     const attempts = wrapper.find('h1[data-test="attempts"]');
//     expect(attempts.text()).toBe("Attempts: 1");
//     const message = wrapper.find('h1[data-test="message"]');
//     expect(message.text()).toBe("Aim Higher");
// });