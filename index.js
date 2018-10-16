console.log('Hello World');

// function scoped
var myVar = 'my Value';

function greet(name) {
  var greeting = 'Hello';
  console.log(greeting + ' ' + name);
}
greet('Klaus');

// block scoped
let myVar2 = 'my Value';

function getValue() {
  return 'asdf';
}

function greet2(name) {
  if (name === 'Klaus') {
    let greeting;
    try {
      greeting = getValue();
    } catch (e) {
      console.log(e);
    }
    console.log(greeting + ' ' + name);
  } else {
    let greeting = 'Hello';
    console.log(greeting + ' ' + name);
  }
  // console.log(greeting);
}
greet2('Klaus');

// constant value
const myVar3 = 'my Value';
// throws a TypeError
// myVar3 = 'other value';

// hoisting
hoisting();
function hoisting() {
  console.log('hoisted');
  try {
    console.log('Hello ' + name);
    let name = 'Klaus';
  } catch (e) {
    // console.log(e);
  }
}

let hoisted2 = function() {
  console.log('Hoisted 2');
};
hoisted2();

// data types

let string = 'asdf';
// <input type="text" id="myNumber">
let number = 14 / parseInt('1asdf', 10);
console.log(number);
let boolean = true;
let undefinedType = undefined;
let nullType = null;

function myFunc(a, b) {
  // if (a === undefined) {
  //   a = 'x';
  // }
  // if (b === undefined) {
  //   b = 'y';
  // }
  a = a || 'x';
  b = b || 'y';
  console.log(a, b);
}
myFunc();
myFunc(1);
myFunc(1, 2);
myFunc(1, 2, 3);
myFunc('', ``);

const arr = ['a', 1, false];
arr.push('xy');
console.log(arr);

const obj = { name: 'Klaus', age: 42 };
obj.lastname = 'Müller';
// doesn't work
// obj = { name: 'Maria', lastname: 'Meier', age: 14 };
console.log(obj);
