# Test-Driven Development with React Testing Library

This tutorial assumes you know the basics of git, React, and React Router

## Why do we test?

Before we get in to how to do test-driven development in React, let's discuss why we write tests in the first place.

### Ensure our code works as expected

Given an input (or set of inputs) we want to ensure that we get the expected output after executing our code. If we get an output that we don't expect, the test(s) will fail which tells us something isn't working correctly. By writing tests, we can be confident that the code works for all of cases it needs to.

### Make refactoring easier

Software engineers often refactor their code. Without tests, it is difficult to know if the refactored code accounts for all of the cases it needs to. With tests, you can be confident that the refactored code accounts for all of the cases it needs to. If any tests fails, we can know what part of the code isn't working correctly and address the issue.

### Enable seamless collaboration

Software engineers often collaborate in order to build software. This means that often you're looking at someone elses code. If there are tests, we know how the code is expected to behave, so you can refactor or extend the code's functionality with ease.

## What makes a good test?

We want to be sure the tests we write are good. Otherwise, a the test can give us a falsely indicate that the code is working as expected when it isn't. There are a number of characteristics to consider when writing good tests. Let's discuss three of them.

### Independent

Each test should not depend on any of the other tests. This is because testing tools often randomize the order in which tests are run. If a test fails we want to be sure that it is indicating something is breaking rather than the test being run out of order.

### Idempotent

Test suites, which are a collections of tests, are run often. We want to be sure that we get the same result each time, regardless of how many times we run it. If a test failes we want to be sure it's indicating something is breaking rather than being run one too many times.

### Atomic

The software we build often has lots of features. Instead of having unnecessarily complicated tests, we can write tests that test the smallest amount of functionality at a time. This way we can maximize the number of scenarios we are account for while writing the fewest tests.

## What is Test-Driven Development?

Test-driven development, TDD for short, is when you write a test before you implement the code that passes the test to develop your software application.

## What is React Testing Library

React Testing Library is a solution for testing React components. The tests work with actual DOM nodes, so it provides utilities to query the DOM in the same way the user would. Let's discuss some of these queries.


### Queries

React Testing Library provides a number queries to find elements in the DOM. [Here](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries) is a comprehensive resources that discusses all of them. Today we will be using three queries that we will discuss.

`getByLabelText` - Searches the DOM for an element that has a given label associated with it. For example, if we want to find the username input field, we can use this query with the username label.

`getByText` - Searches the DOM for an element that contains the given text. For example if we wanted to find some text in some paragraph tags, we can use this query with the text we want to find.

`getByRole` - Searches the DOM for an element that is a given ARIA role. For example if we wanted to find a link, we can use this query to with the link's text we want to find.

## Test-Driven Development in Action (Phase 1)

### Using Create React App

To create a React application in the folder `rtl-tdd`, please run the following command.
```
npx create-react-app rtl-tdd
```

To navigate to the `rtl-tdd` directory, please run the following command.
```
cd rtl-tdd
```

To run the development server, please run the following command.
```
yarn start
```

Then when you go to http://localhost:3000 in your browser you should see the following.
![CRA Screen](https://user-images.githubusercontent.com/7481098/132736538-e52b5c3b-f1db-4295-8a31-135a33c92e67.png)

Fortunately, everything we need to run React Testing Library comes installed, so we don't need to do any configuration. There is even a test that is already written for us. To execute all of the tests, please run the following command.
```
yarn test
```

### Improving the Existing Test

Please open the file `src/App.test.js` in a text editor.

The test expects that there is the text "Learn React" in the App component. When you look at the component in your browser, notice how the text that says "Learn React" is a link. This test should be more precise, so let's use the getByRole query to get that DOM element. Please replace line 6 in `src/App.test.js` with the following.
```
const linkElement = screen.getByRole('link', /learn react/i);
```

When the test suite runs, it should pass the test again.

Because we want to be sure this test fails when the text "Learn React" is present but is not a link. To do this please change the anchor tag in `src/App.js` to be a paragraph tag. Once you do this, you should see your test fail as shown below.
[screenshot 2]

Now that we know our test is good, please revert the `src/App.js` file by running the following command.
```
git checkout src/App.js
```

Now your test should pass again as shown below.
[screenshot 3]

To see what your code should look like, please checkout the branch `phase-01` in this repository.

## Test-Driven Development in Action (Phase 2)

### Configuring Client-side Routing

While Create React App does at lot to set up the React application, it doesn't include client-side routing. To install React Router, please run the following.
```
yarn add react-router-dom
```

Then, please add the BrowserRouter component to `src/index.js` like so.
```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

To define an index route in `src/App.js`, delete everything in the file and replace it with the following.
```
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={() => <h1>Index</h1>} />
      </Switch>
    </>
  );
}

export default App;
```

To delete the `src/App.test.js` file, please run the following command.

```
rm src/App.test.js
```

### Creating an Index page

To create a directory for pages, please run the following command.
```
mkdir pages
```

To create a directory for tests, please run the following command.
```
mkdir pages/__tests__
```

To set up the Index page, create a file called `src/pages/Index.js` with the following contents
```
function Index() {
  return (
    <div>
      <div>Index</div>
    </div>
  )
}

export default Index;
```

To write our first test, create a file called `src/pages/__tests__/Index.test.js` with the following contents
```
import { render, screen } from "@testing-library/react"

import Index from "../Index"

describe("The Index component", () => {
  beforeEach(() => {
    render(<Index />)
  })

  describe("renders", () => {
    test("the header", () => {
      const header = screen.getByRole('heading', { name: /index/i })
      expect(header).toBeInTheDocument()
    })
  })
})
```

When you run the tests, it should fail. To make this test pass, please use a header tag that contains the text Index in `src/App.js`

To set us up for the next phase, please change `src/pages/__tests__/Index.test.js` to be the following.
```
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Index from "../Index"

describe("The Index component", () => {
  beforeEach(() => {
    render(<BrowserRouter><Index /></BrowserRouter>)
  })

  describe("renders", () => {
    test("the header", () => {
      const header = screen.getByRole('heading', { name: /index/i })
      expect(header).toBeInTheDocument()
    })

    test("the signup link", () => {
      const link = screen.getByRole('link', { name: /sign up/i })
      expect(link).toBeInTheDocument()
    })
  })
})
```

To make this test pass, please use the `Link` component from React Router to link to the `/sign-up` route.

Finally, let's use our Index component in `src/App.js` be ensuring it has the following contents.
```
import { Switch, Route } from 'react-router-dom'

import Index from './pages/Index'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </>
  );
}

export default App;
```

To see what your code should look like, please checkout the branch `phase-02` in this repository.

## Test-Driven Development in Action (Phase 3)

### Creating a Sign up Page

Using the TDD methodology, create a sign up page with the following. 
* A header that says "Sign Up"
* A form with the following
  - A username input field
  - An email input field
  - A password input field
  - A password confirmation input field
  - A sign up button

Be sure to use labels for the input fields. When writing your tests, be sure to use the queries `getByRole` and `getByLabelText`

To see what your code should look like, please checkout the branch `phase-03` in this repository.
