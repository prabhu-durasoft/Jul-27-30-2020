import React from 'react';
import Enzyme, { shallow, mount } from  'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import HelloWithReduxThunkContainer from './HelloWithReduxThunk';
import store from './Hello.thunk.reducer';
Enzyme.configure({adapter: new EnzymeAdapter()});

it("1", () => {
    
    const wrapper = mount(<HelloWithReduxThunkContainer store={store}/>); 
    expect(wrapper).toBeTruthy();
});
it("2", () => {
    const spy = jest.spyOn(axios, 'get')
    axios.get.mockImplementationOnce(() => Promise.resolve("Data from server"));
    const wrapper = mount(<HelloWithReduxThunkContainer store={store}/>); 
    expect(spy).toHaveBeenCalled();
    setTimeout(() => {
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Data from server');
    }, 1);
});