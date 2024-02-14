import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Calculator from './Calculator';

describe('Calculator component', () => {
  test('renders the component without errors', () => {
    const renderer = render(<Calculator />);
    expect(renderer).toMatchSnapshot();
  });

  test('displays the initial values correctly', () => {
    const { getByTestId } = render(<Calculator />);
    const displayElement = getByTestId('display');
    expect(displayElement.textContent).toBe('');
  });

  test('handles button clicks correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const displayElement = getByTestId('display');

    fireEvent.click(getByText('1'));
    expect(displayElement.textContent).toBe('1');

    fireEvent.click(getByText('+'));
    expect(displayElement.textContent).toBe('1+');

    fireEvent.click(getByText('2'));
    expect(displayElement.textContent).toBe('1+2');

    fireEvent.click(getByText('='));
    expect(displayElement.textContent).toBe('3');

    fireEvent.click(getByText('AC'));
    expect(displayElement.textContent).toBe('');
  });
});
