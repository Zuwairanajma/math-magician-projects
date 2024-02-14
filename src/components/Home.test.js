import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Home from './Home';

describe('Testing Home', () => {
  test('render with snapshot', () => {
    const element = render(<Home />);
    expect(element).toMatchSnapshot();
  });

  test('Render Home component', () => {
    const { getByTestId } = render(<Home />);
    const element = getByTestId('display');
    expect(element).toBeInTheDocument();
  });
});
