import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tweet Feed header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tweet Feed/i);
  expect(linkElement).toBeInTheDocument();
});
