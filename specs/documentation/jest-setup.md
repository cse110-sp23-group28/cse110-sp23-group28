# Jest Set-Up

Jest is a JavaScript testing framework that allows for unit testing of a JavaScript codebase. This document walks through how Jest was set up in the Bae-o-meter repository.

## How to Use Jest

```shell
# Install jest
$ npm install --save-dev jest

## Run tests
$ npm test
```
Add unit tests in the `tests` directory.

## Setup Guide
[Tutorial](https://jestjs.io/docs/getting-started)

### npm
npm is a package manager used to install Jest.

npm was not installed before I set this up, so I installed npm first configured to default settings using:
```shell
npm init
```
As a result, `package.json` and `package-lock.json` were created to store the list of dependencies and packages downloaded using npm (think of these as configuration files).

The `node_modules` directory was also created to store all of the files for the dependencies. This folder is huge so there is a `.gitignore` to ignore it.

### Installing Jest

I installed Jest by doing
```shell
npm install jest --save-dev
```
This saves Jest as a developer dependency, meaning that Jest is only a dependency to the developer when developing, but not in the final product.

~~Jest requires a test environment, so I installed one using~~

~~npm install jest-environment-jsdom --save-dev~~


### Setting Up Jest

~~`jest.config.js` is a configuration file for Jest, which configures the test environment as well.~~

`specs/documentation/jest_example.js` is an random function to demonstrate how Jest works.

`tests` holds all of the unit tests for Jest. `tests/jest_example.test.js` is an example of unit tests for `jest_example.js`.
