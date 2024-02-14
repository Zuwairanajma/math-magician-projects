import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/jest-globals';
import Navbar from './Navbar';

test('renders the navbar with correct label', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const labelElement = screen.getByText('Math Magicians');
  expect(labelElement).toBeInTheDocument();
});
test('renders the navbar with correct links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
  const quoteLink = screen.getByRole('link', { name: 'Quotes' });

  expect(homeLink).toHaveAttribute('href', '/');
  expect(calculatorLink).toHaveAttribute('href', '/calculator');
  expect(quoteLink).toHaveAttribute('href', '/quotes');
});

test('matches snapshot', () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(container).toMatchSnapshot();
});
