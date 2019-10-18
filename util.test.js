const { generateText } = require('./util');

//jest function
//takes two args
test('should output name and age', () => {
  const text = generateText('Caleb', 24);

  //asserting the test
  expect(text).toBe('Caleb (24 years old)');
});

//testing to ensure the function is not hardCoded
//edge case
test('should output data-less text ', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

//when you have not passed arguments
test('no arguments passed', () => {
  const text = generateText();
  expect(text).toBe('undefined (undefined years old)');
});
