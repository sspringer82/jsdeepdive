console.log('eins');
console.log('zwei');

// async with callbacks
function myAsyncFunction(callback) {
  setTimeout(() => {
    const result = 1 + 2;
    callback(result);
  }, 1000);
}

myAsyncFunction(value => {
  console.log('Value: ', value);
});

// asyc with promise
function myPromiseFunction(timeout = 1000, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = 1 + 2;
      if (success) {
        resolve(result);
      } else {
        reject('Oh no!');
      }
    }, timeout);
  });
}

const promise = myPromiseFunction();
promise
  .then(value => {
    console.log('1 Promise is resolved with: ', value);
    return myPromiseFunction();
  })
  .then(value => {
    console.log('2 Promise is resolved with: ', value);
    return myPromiseFunction();
  });

const p1 = myPromiseFunction();
const p2 = myPromiseFunction();
const p3 = myPromiseFunction();
const p4 = myPromiseFunction();

// all promises
Promise.all([p1, p2, p3, p4]).then(values => {
  console.log('all values: ', values);
});
// fastest promise
Promise.race([p1, p2, p3, p4]).then(values => {
  console.log('all values: ', values);
});

myPromiseFunction(50, false)
  .then(
    value => {
      console.log(value);
    },
    // error => {
    //   console.log(error);
    // },
  )
  .catch(e => {
    console.error(e);
  });

const p5 = Promise.resolve('resolved');
const p6 = Promise.reject('resolved');

p5.then(value => console.log(value));
p6.catch(e => console.log(e));

setTimeout(() => {
  p5.then(value => {
    console.log(value);
  });
}, 1000);

//IIFE
const value = (async function() {
  console.log('x davor');
  try {
    const result = await myPromiseFunction();
    console.log('x value: ', result);
    const result2 = await myPromiseFunction();
    console.log('x value: ', result2);
    const result3 = await myPromiseFunction();
    console.log('x value: ', result3);
    console.log('x danach');
    return result3;
  } catch (e) {
    console.error('x', e);
  }
})();

value.then(res => {
  console.log('my async function result', res);
});
