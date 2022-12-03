import { render, screen } from '@testing-library/react';
import App from './App';
import React, { useState, useEffect } from 'react';
import './ChartsContainer.css';


test('renders root page', () => {
  render(<App />);
  const linkElement = screen.getByText('');
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});
