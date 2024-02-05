import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { render } from './setupTests';


test('renders Movie Award screen', () => {
    render(<App />);
  const linkElement = screen.getByText(/Movie Awards/i);
  expect(linkElement).toBeInTheDocument();
});
