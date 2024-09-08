import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Keyboard from '../../lib/components/Keyboard';


describe('Wordle Component', () => {
  const history = [[
    { key: 'd', color: 'green' },
    { key: 'r', color: 'green' },
    { key: 'e', color: 'green' },
    { key: 'a', color: 'green' },
    { key: 'm', color: 'green' },
    { key: 's', color: 'green' },
  ]];
  const gameOver = false;
  const onPush   = (_: {key: string}) => {};
  const subject  = () => { render(<Keyboard history={history} onPush={onPush} gameOver={gameOver}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

