import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteLogoLine from './SiteLogoLine';

describe('<SiteLogoLine />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteLogoLine />);
    const siteLogoLine = getByTestId('SiteLogoLine');

    expect(siteLogoLine).toBeInTheDocument();
  });
});