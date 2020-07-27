import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Header } from './Header';
Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should render Header", () => {
    const comp = shallow(<Header/>);
    console.log(comp.debug());
    expect(comp).toBeTruthy();
});

/**
 * mount()
 * <Header>
      <div>
        <h1>
          Welcome to React Testing
        </h1>
        <Message>
          <div>
            Message from Intuit
          </div>
        </Message>
      </div>
    </Header>
 * 
 */
