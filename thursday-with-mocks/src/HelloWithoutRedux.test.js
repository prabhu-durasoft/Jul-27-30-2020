import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {HelloWithoutRedux} from './HelloWithoutRedux';
import axios from 'axios';
Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should render component", () => {
    const component = shallow(<HelloWithoutRedux/>);
    expect(component).toBeTruthy();
});

it("should have data set", () => {
    const spy = jest.spyOn(axios, "get");
    axios.get.mockImplementationOnce(() => Promise.resolve("Data from server"));
    const component = shallow(<HelloWithoutRedux/>);
    setTimeout(() => {
        const h1 = component.find("h1");
        expect(h1.text()).toBe("Data from server");
    }, 1);
    expect(spy).toHaveBeenCalled();
});