import StringService from './StringService';

test('converts string to CSS safe name', () => {
  const str = StringService.toCSSName('Invalid CSS!!@#$%^&*()_+0001');
  expect(!str.includes(' '));
  expect(!str.includes('!'));
  expect(!str.includes('@'));
  expect(!str.includes('$'));
  expect(!str.includes('%'));
  expect(!str.includes('^'));
  expect(!str.includes('&'));
  expect(!str.includes('*'));
  expect(!str.includes('('));
  expect(!str.includes(')'));
  expect(!str.includes('+'));
  expect(str).toEqual('invalid-css-0001');
});
