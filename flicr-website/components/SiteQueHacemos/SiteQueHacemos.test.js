import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteQueHacemos from './SiteQueHacemos';

describe('<SiteQueHacemos />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteQueHacemos />);
    const siteQueHacemos = getByTestId('SiteQueHacemos');

    expect(siteQueHacemos).toBeInTheDocument();
  });
});