* Not act of verification
* Act of design
* Code or design evolves as you write tests
* TDD or BDD
* Write your tests, make them fail, fill in the code, make them succeed
* Write Unit tests while writing code
* Unit tests are like USERS of your code

* QUnit for jQuery
* Jasmine, Jest, Chai, Mocha, Karma
* API + Test Runner
* Jasmine + Karma

* __Jest (API + Test Runner)__
* __Jest + Enzyme__

* Install jest globally
```
sudo yarn add global jest
```
* Looks for __.test.js__ or __.test.ts__ or __.spec.ts__ or __.spec.js__ files


### react

* create-react-app
* jest is included
* DOM, Virtual DOM
* jest does not support DOM testing, or Virtual DOM testing

* For DOM testing you need to add __@testing-library/react__
* You can test for UI, but not state, props

* For Virtual DOM testing you need to add __enzyme__
* You can test UI, state, props, components

* __sudo yarn add global create-react-app__
* __sudo npm install -g create-react-app__
* __sudo yarn add --dev enzyme jest-enzyme enzyme-adapter-react-16__

### Enzyme API

* shallow()
* find("selector")
* simulate("event")
* state("")
* setState("")
* Use setTimeout in case of setState()
* __data-test__ attributes for test 
* Remove these attributes using __babel-plugin-react-remove-properties__

### Redux

* __sudo yarn add redux react-redux__

### Mocking

* sudo yarn add --dev redux-mock-store

* __Components__
* Use shallow, find, simulate and expect

* __Containers__
* Use mount, find, simulate and expect
* If s**t happens, then you think of mocking

* Create mock manually using a simple JSON object
* Mock functions using __jest.fn()__
* Use toHaveBeenCalled, toHaveBeenCalledTimes, mockReturnValueOnce etc

* OR
* You spy on a real object
* __jest.spyOn(realobject, "methodName");__
* Use toHaveBeenCalled, toHaveBeenCalledTimes etc

* sudo yarn add axios
* __jest.spyOn(axios, "get")__

### Function components

* Enzyme does not support react hooks
* Cannot call state, setState, useEffect
* Use mount and not shallow


* Or use Jest React testing library

### Enzyme vs @testing-library

* Shallow Testing
* simulate()
* component.find("selector)
* test state and props
* has to be installed separately
* Does not support Snapshot testing
* No suport for react hooks

* Full DOM testing
* fireEvent
* getByText, getByPlaceholderText ...etc 
* cannot test state and props
* Automatically comes with the create-react-app
* Supports Snapshot testing
* Used to test function components


### Snapshot testing

* Creates the DOM structure and stores in a file as a snapshot
* runs the tests for components and compares them with the snapshot
* __sudo yarn add --dev react-test-renderer__