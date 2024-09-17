import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Board from '../../lib/components/Board';

describe('Board Component', () => {
  const history = [[
    { key: 'd', color: 'green' },
    { key: 'r', color: 'green' },
    { key: 'e', color: 'green' },
    { key: 'a', color: 'green' },
    { key: 'm', color: 'green' },
    { key: 'm', color: 'green' },
  ]];
  const currentGuess = 'dreams';
  const subject  = () => { render(<Board history={history} currentGuess={currentGuess} wordLength={6} totalTurns={8}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

