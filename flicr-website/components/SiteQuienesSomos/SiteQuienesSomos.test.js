import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteQuienesSomos from './SiteQuienesSomos';

describe('<SiteQuienesSomos />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteQuienesSomos />);
    const siteQuienesSomos = getByTestId('SiteQuienesSomos');

    expect(siteQuienesSomos).toBeInTheDocument();
  });
});