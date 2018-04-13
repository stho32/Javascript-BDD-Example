# JavaScript Unit Testing

  - the course proposes using mocha as testing framework
  - http://chaijs.com/guide/installation/
  - http://chaijs.com/guide/styles/
  - **http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/**
  - https://mochajs.org/

  - I use the folder name "Tests" for my tests because I think it looks
    better than "test" (It looks more like my other preferences for folder names). 
    For that I have to use a few modified commands but nothing critical. 

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
  - run the tests in "minimal" reporting mode (only show details for failing tests)
  ```
  npm run test-minimal
  ```
    
