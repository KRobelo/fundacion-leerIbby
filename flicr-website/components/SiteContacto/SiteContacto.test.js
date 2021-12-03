import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteContacto from './SiteContacto';

describe('<SiteContacto />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteContacto />);
    const siteContacto = getByTestId('SiteContacto');

    expect(siteContacto).toBeInTheDocument();
  });
});