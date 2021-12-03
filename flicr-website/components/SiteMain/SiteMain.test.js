import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteMain from './SiteMain';

describe('<SiteMain />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteMain />);
    const siteMain = getByTestId('SiteMain');

    expect(siteMain).toBeInTheDocument();
  });
});