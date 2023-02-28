const stringLength = require('./stringLength');

test("Expects 'hello' length to be 5 ", () => {
  expect(stringLength('hello')).toBe(5)
});

test("Expects '' to throw an Error ", () => {
  expect(() => stringLength('')).toThrow();
});