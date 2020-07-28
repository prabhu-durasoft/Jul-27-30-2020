import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Greetings } from './Greetings';
Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should render the component", () => {
    const component = shallow(<Greetings/>);
    expect(component).toBeTruthy();
});