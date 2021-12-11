import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompSocialMedia from './CompSocialMedia';

describe('<CompSocialMedia />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CompSocialMedia />);
    const compSocialMedia = getByTestId('CompSocialMedia');

    expect(compSocialMedia).toBeInTheDocument();
  });
});
