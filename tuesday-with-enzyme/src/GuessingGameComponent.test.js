import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { GuessingGameComponent } from './GuessingGameComponent';
Enzyme.configure({ adapter: new EnzymeAdapter() });

let component;
beforeEach(() => {
    component = shallow(<GuessingGameComponent/>);
});

it("should render component", () => {
    expect(component).toBeTruthy();
});
