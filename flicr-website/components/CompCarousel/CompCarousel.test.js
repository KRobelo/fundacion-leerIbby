import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompCarousel from './CompCarousel';

describe('<CompCarousel />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CompCarousel />);
    const compCarousel = getByTestId('CompCarousel');

    expect(compCarousel).toBeInTheDocument();
  });
});