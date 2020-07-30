import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {render, fireEvent} from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter() });
import {FuncComp} from './FuncComp';

xit("should render", () => {
    const component = shallow(<FuncComp/>);
    expect(component).toBeTruthy();
});

xit("should increment count by 1 on button click", () => {
    const component = shallow(<FuncComp/>);
    const h2 = component.find("h2");
    const button = component.find("button");
    button.simulate("click");
    
    //expect(component.state("count")).toBe(1);

    setTimeout(() => {
        expect(h2.text()).toBe("Count: 1");
        
    }, 0);
    
    
//Enzyme does not support react hooks fully
//you cannot call state or setState
//useEffect will not be executed at all
//DON'T USE ENZYME FOR FUNCTION COMPONENTS 
//THT USE React Hooks

});

it("should render with jest render", () => {
    const {getByText, getByPlaceholderText } = render(<FuncComp/>);
    expect(getByText("Hello There!!!")).toBeTruthy();
    fireEvent.click(getByText("Click"));
    expect(getByText("Count: 1")).toBeTruthy();
    expect(getByPlaceholderText("Name")).toBeTruthy();
});