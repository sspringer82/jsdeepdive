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

hoisted2();
let hoisted2 = function() {
  console.log('Hoisted 2');
};
