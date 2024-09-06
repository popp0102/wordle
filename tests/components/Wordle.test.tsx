import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Wordle from '../../lib/components/Wordle';


describe('Wordle Component', () => {
  const subject = () => render(<Wordle />, {});

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

