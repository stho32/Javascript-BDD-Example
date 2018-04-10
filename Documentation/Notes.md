# JavaScript Unit Testing

  - the course proposes using mocha as testing framework
  - http://chaijs.com/guide/installation/
  - http://chaijs.com/guide/styles/
  - **http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/**
  - https://mochajs.org/

## Setup
  - Init npm
  ```
  npm init
  ```
  - Install mocha and chai as dev dependency
  ```
  npm install mocha chai --save-dev
  ```
  - Change the test script for npm to "mocha Tests" (in package.json). 
  ```
  ...
  "scripts": {
    "test" : "mocha Tests"
  },
  ...
  ```
  - place some tests within the folder "Tests"
  - run the tests placed within the folder "Tests"
  ```
  npm test
  ```
    
