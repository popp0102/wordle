import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Board from '../../lib/components/Board';

describe('Board Component', () => {
  const history = [[
    { key: 'd', status: 'right' },
    { key: 'r', status: 'right' },
    { key: 'e', status: 'right' },
    { key: 'a', status: 'right' },
    { key: 'm', status: 'right' },
    { key: 's', status: 'right' },
  ]];
  const currentGuess = 'dreams';
  const subject  = () => { render(<Board history={history} currentGuess={currentGuess} wordLength={6} totalTurns={8} colorConfig={{}}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

