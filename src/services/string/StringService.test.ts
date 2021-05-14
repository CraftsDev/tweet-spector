import StringService from './StringService';

test('converts string to CSS safe name', () => {
  const invalidCSSName = 'Invalid CSS!!`{}[]\\|:";\'<>?,./@#$%^&*()_+0001';
  const str = StringService.toCSSName(invalidCSSName);
  expect(str.includes(' ')).toBeFalsy();
  expect(str.includes('!')).toBeFalsy();
  expect(str.includes('@')).toBeFalsy();
  expect(str.includes('$')).toBeFalsy();
  expect(str.includes('%')).toBeFalsy();
  expect(str.includes('^')).toBeFalsy();
  expect(str.includes('&')).toBeFalsy();
  expect(str.includes('*')).toBeFalsy();
  expect(str.includes('(')).toBeFalsy();
  expect(str.includes(')')).toBeFalsy();
  expect(str.includes('+')).toBeFalsy();
  expect(str).toEqual('invalid-css-0001');
});
