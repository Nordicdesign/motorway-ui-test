import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
})

test('renders the header', () => {
  const linkElement = screen.getByRole('heading', { name: /what we've been up to recently/i })
  expect(linkElement).toBeInTheDocument()
});

test('renders the form show button', () => {
  const button = screen.getByRole('button', { name: /tell me about yourself/i })
  expect(button).toBeInTheDocument()
})

test('modal is hidden by default', () => {
  const modal = screen.queryByTestId('modal')
  expect(modal).not.toBeInTheDocument()
})
