## Test-Driven Development with React Testing Library

This tutorial assumes you know the basics of git, React, and React Router

### Why do we test?

Before we get in to how to do test-driven development in React, let's discuss why we write tests in the first place.

#### Ensure our code works as expected

Given an input (or set of inputs) we want to ensure that we get the expected output after executing our code. If we get an output that we don't expect, the test(s) will fail which tells us something isn't working correctly. By writing tests, we can be confident that the code works for all of cases it needs to.

#### Make refactoring easier

Software engineers often refactor their code. Without tests, it is difficult to know if the refactored code accounts for all of the cases it needs to. With tests, you can be confident that the refactored code accounts for all of the cases it needs to. If any tests fails, we can know what part of the code isn't working correctly and address the issue.

#### Enable seamless collaboration

Software engineers often collaborate in order to build software. This means that often you're looking at someone elses code. If there are tests, we know how the code is expected to behave, so you can refactor or extend the code's functionality with ease.

### What makes a good test?

We want to be sure the tests we write are good. Otherwise, a the test can give us a falsely indicate that the code is working as expected when it isn't. There are a number of characteristics to consider when writing good tests. Let's discuss three of them.

#### Independent

Each test should not depend on any of the other tests. This is because testing tools often randomize the order in which tests are run. If a test fails we want to be sure that it is indicating something is breaking rather than the test being run out of order.

#### Idempotent

Test suites, which are a collections of tests, are run often. We want to be sure that we get the same result each time, regardless of how many times we run it. If a test failes we want to be sure it's indicating something is breaking rather than being run one too many times.

#### Atomic

The software we build often has lots of features. Instead of having unnecessarily complicated tests, we can write tests that test the smallest amount of functionality at a time. This way we can maximize the number of scenarios we are account for while writing the fewest tests.
