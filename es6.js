const user = {
  name: 'Klaus',
  age: 42,
};

// destructuring
const { name, age } = user;
console.log(name + ' is ' + age);

function greet({ name }) {
  console.log('Hello', name);
}

greet(user);

const arr = [1, user, user];
const [, { age: uage }, { name: uname }] = arr;
console.log(uname);

// function stuff
(() => {
  function add(...args) {
    return args[0] + args[1];
  }

  const arr = [1, 2];

  console.log(add.apply(null, arr));
  console.log(add(...arr));

  // const u2 = JSON.parse(JSON.stringify(user));
  // const u2 = Object.assign({}, user);
  // clone the user object
  const u2 = clone(user);

  u2.name = 'Claudia';

  console.log(user.name);
  console.log(u2.name);

  function clone(obj) {
    return { ...obj };
  }
})();

// template strings

(() => {
  const greeting = `Hello ${user.name}`;
  console.log(greeting);
  const g2 = myFunc`Hello ${user.name}`;

  function myFunc(strings, ...args) {
    console.log(strings);
    console.log(args);
  }
})();

// map/set
(() => {
  const myMap = new Map();

  const func = () => {};
  myMap.set(func, user);
  console.log(myMap.get(func));

  const mySet = new Set();
  mySet.add('x');
  mySet.add('x');
  mySet.add('x');
  console.log(mySet.size);
})();

function doSomething() {
  const result = 1 + 2;
}
