const capitalize = require('./capitalize');

test('mom', () => {
  expect(capitalize('mom')).toMatch(/Mom/);
})