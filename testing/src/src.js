class Calculator {
  add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
      throw new Error('Not a Number!');
    }
    return a + b;
  }
}
