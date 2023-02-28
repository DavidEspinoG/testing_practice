const reverseString = require('./reverseString');

test('hello reverse', () => {
  expect(reverseString('hello')).toMatch(/olleh/)
})

