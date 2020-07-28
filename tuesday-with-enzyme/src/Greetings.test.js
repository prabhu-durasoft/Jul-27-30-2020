import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Greetings } from './Greetings';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("UI test for case 1", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Greetings/>);
    })
    
    it("should render the component", () => {
        expect(component).toBeTruthy();
    });
    
    it("should have a text box to enter the name", () => {
        const textbox = component.find("input[type='text']");
        expect(textbox.length).toBe(1);
    });
    
    it("should have a button", () => {
        const button = component.find('#firstbutton');
        expect(button.length).toBe(1);
    });
    
    it("should have a h1", () => {
        const h1 = component.find('#firstheader');
        expect(h1.length).toBe(1);
    });
    
    it("should display a message on button click", () => {
        const textbox = component.find("input[type='text']");
        textbox.simulate('change', { target: { value: "Sam" }});
        const button = component.find(".cls1");
        button.simulate("click");
        const h1 = component.find("#firstheader");
        expect(h1.text()).toBe("Hello Sam");    
    });
});

describe("states", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Greetings/>);
    })
    it("should have name and message in state", () => {
        expect(component.state("name")).toBeNull();
        expect(component.state("message")).toBeNull();
    });
    it("should change the message on button click", () => {
         component.setState({"name": "John"});
         const button = component.find(".cls1");       
         button.simulate("click");
         expect(component.state("message")).toBe("Hello John");
    });
});



// In the same component
// Have another button
// clicking the button should display a message "Hi ${name}" in another h1

// One textbox, 2 buttons, 2 h1 tags

describe("UI test for case 2", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Greetings/>);
    })
    
    it("should render the component", () => {
        expect(component).toBeTruthy();
    });
    
    it("should have a button", () => {
        const button = component.find('#secondbutton');
        expect(button.length).toBe(1);
    });
    
    it("should have a h1", () => {
        const h1 = component.find('#secondheader');
        expect(h1.length).toBe(1);
    });
    
    it("should display a message on button click", () => {
        // const textbox = component.find("input[type='text']");
        // textbox.simulate('change', { target: { value: "Sam" }});
        // const button = component.find("#secondbutton");
        // button.simulate("click");
        // const h1 = component.find("#secondheader");
        // expect(h1.text()).toBe("Hi Sam"); 

        const textbox = component.find("input[data-test='name']");
        textbox.simulate('change', { target: { value: "Sam" }});
        const button = component.find("button[data-test='button2']");
        button.simulate("click");
        const h1 = component.find("h1[data-test='header2']");
        expect(h1.text()).toBe("Hi Sam");    
    });
});
