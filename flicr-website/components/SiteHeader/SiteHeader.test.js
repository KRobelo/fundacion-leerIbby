import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteHeader from './SiteHeader';

describe('<SiteHeader />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteHeader />);
    const siteHeader = getByTestId('SiteHeader');

    expect(siteHeader).toBeInTheDocument();
  });
});