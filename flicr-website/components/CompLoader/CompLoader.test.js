import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompLoader from './CompLoader';

describe('<CompLoader />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CompLoader />);
    const compLoader = getByTestId('CompLoader');

    expect(compLoader).toBeInTheDocument();
  });
});