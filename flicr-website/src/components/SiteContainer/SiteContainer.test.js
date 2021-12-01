import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteContainer from './SiteContainer';

describe('<SiteContainer />', () => {
  test('it should mount', () => {
    render(<SiteContainer />);
    
    const siteContainer = screen.getByTestId('SiteContainer');

    expect(siteContainer).toBeInTheDocument();
  });
});