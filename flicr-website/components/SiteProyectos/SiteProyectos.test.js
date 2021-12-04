import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteProyectos from './SiteProyectos';

describe('<SiteProyectos />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SiteProyectos />);
    const siteProyectos = getByTestId('SiteProyectos');

    expect(siteProyectos).toBeInTheDocument();
  });
});