const Calculator = require('./calculator');

const calc = new Calculator;

describe('Calculator', () => {
  test('add', () => {
    expect(calc.add(1, 1)).toBe(2)
  });
  test('substract', () => {
    expect(calc.substract(2, 1)).toBe(1)
  });
  test('divide', () => {
    expect(calc.divide(10, 2)).toBe(5)
  });
  test('multiply', () => {
    expect(calc.multiply(1, 5)).toBe(5)
  });
});
