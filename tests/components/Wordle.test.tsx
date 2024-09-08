import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Wordle from '../../lib/components/Wordle';


describe('Wordle Component', () => {
  const solution = "dreams";
  const subject  = () => { render(<Wordle solution={solution} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

