import React from 'react';
import { getSize } from './ScreenService';

test('Get 100% if Mobile Device', () => {
  const widthString = '800px';
  const width = getSize(widthString, false);
  const width100 = getSize(widthString, true);
  expect(width).toEqual(widthString);
  expect(width100).toEqual('100%');
});
