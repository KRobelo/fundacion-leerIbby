import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteDonar from './SiteDonar';

describe('<SiteDonar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteDonar />);
    const siteDonar = getByTestId('SiteDonar');

    expect(siteDonar).toBeInTheDocument();
  });
});