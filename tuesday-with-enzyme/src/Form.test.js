import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Form } from './Form';
Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should render", () => {
    const component = shallow(<Form name="Sam"/>);
    expect(component).toBeTruthy();
    //expect(component.props("name")).toBe("Sam");
    expect(component.find("h1").text()).toBe("Sam");
    console.log(component.prop("name"));
});