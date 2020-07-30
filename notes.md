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