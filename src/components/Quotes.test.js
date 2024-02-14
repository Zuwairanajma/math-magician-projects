import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Quotes from './Quotes';

describe('Quote component', () => {
  test('Should render the component and match with the snapshot', () => {
    expect(render(<Quotes />)).toMatchSnapshot();
  });
  it('should render loading while fetching data', () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
