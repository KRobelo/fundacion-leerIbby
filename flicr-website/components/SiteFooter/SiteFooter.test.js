import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteFooter from './SiteFooter';

describe('<SiteFooter />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteFooter />);
    const siteFooter = getByTestId('SiteFooter');

    expect(siteFooter).toBeInTheDocument();
  });
});