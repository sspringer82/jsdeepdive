describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    // Arrange
    calc = new Calculator();
  });

  it('should add 1 and 1 and return 2', done => {
    // Act
    const result = calc.add(1, 1);
    // Assert
    setTimeout(() => {
      expect(result).toBe(2);
      done();
    }, 1000);
  });

  it('should throw an exception if there is a string', () => {
    expect(() => {
      calc.add('a', 'b');
    }).toThrow();
  });
});
