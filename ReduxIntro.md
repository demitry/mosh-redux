# Redux tutorial

Mosh: https://codewithmosh.com/

Redux tutorial: https://youtu.be/poQXNp9ItL4

## Redux - state management library for JS projects

We can use it with
- React
- Angular
- Vue
- Vanilla JS

Complex UI - keep in sync, keep immediately updated

State Management Solutions
- Flux (by Facebook)
- Redux (simpler, more elegant solution)
- MobX

State is saved into Store Object - single source of true.

Data change

how / why / when / where it came from ?

Redux
 - Centralizes app state
 - Make data flow transparent and predictable

Redux Dev Tools (Chrome)
- Actions (log), Data
- Wow! Time traveling debugging
- How did this happen? With Redux - super-puper

Log Rocket

No need to reload, when coming back!
On the client we have state, Single object.

User -> State -> You

## Pros and Cons

### Pros
- Predictable state changes
- Centralized state
- Easy Debug
- Preserve Page State
- Undo/Redo
- Any framework
- Ecosystem and Add-ons

### Cons
- Complexity
- Verbosity

### When NOT to Use Redux
- Tight Budget
- Small and Medium-size apps
- Simple UI and data flow
- Static data

BUT it is great foundation for the future

Be an active problem solver.

60% of React products are made with Redux.

STOP!

Jan 2023!!

### Redux vs Context API: When to use them

https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p#what-is-the-context-api

**SUMMARY**

**Redux** and **Context API**

- **Context API** is a _light-weight solution_ which is more suited for _passing data from a parent to a deeply nested child_ and 

- **Redux** is a more _robust **State Management** solution_.

## Redux Starter

https://programmingwithmosh.com/redux-starter/

```
npm i
npm start
```

https://nodejs.org/dist/v16.13.0/

## Starter Code

package.json

Webpack - module bundler for Js

Multiple files - combined

package.json

```json
  "devDependencies": {
    "webpack": "4.41.6",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.3"
  }
```

webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};
```

## Course Plan

- Redux is based on the functional programming
    - curring ...
- Fundamentals of Redux
  - reducers ...
- Implement from scratch (how everything works)
- Debugging
- Redux - too much code?
- Redux code is ugly and unmaintainable?
- Writing clean code techniques

- Redux Store
- Middleware
- Calling APIs, avoid repetitions
  - Loading indicators, caching
- Testing Redux apps
  - good tests, not just tests
  - proper way
- Integration with React


