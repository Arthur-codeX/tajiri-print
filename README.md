# tajiri-print

## tajiri-print

## NPM

npm install tajiri-print

### YARN

yarn add tajiri-print

## Description

This is a simpe package that enables you to print to the console when on the development environment only.

### Usage: Debug True

```javascript
const Print = require("tajiri-print");
// By default debug is true
let debug = true;

let print = new Print(debug);

print.mess("Hey You");

print.error("Hey You");

print.table({ name: "abcd", age: "123" });
```

<mark>return</mark>

```javascript
Hey You
Hey You
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│  name   │  'abc'  │
│   age   │ '123' │
└─────────┴─────────┘
```

---

### Usage: Debug False

```javascript
const Print = require("tajiri-print");

let debug = false;

let print = new Print(debug);

print.mess("Hey You");

print.error("Hey You");

print.table({ name: "abcd", age: "123" });
```

<mark>return</mark>

```javascript

```

---
