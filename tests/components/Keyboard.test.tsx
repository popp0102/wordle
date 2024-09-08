import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Keyboard from '../../lib/components/Keyboard';


describe('Wordle Component', () => {
  const history = [
    [
      { key: 'A', color: 'yellow' },
      { key: 'B', color: 'gray' },
      { key: 'D', color: 'yellow' },
      { key: 'E', color: 'yellow' },
      { key: 'M', color: 'yellow' },
      { key: 'A', color: 'gray' },
    ],
    [
      { key: 'D', color: 'green' },
      { key: 'R', color: 'green' },
      { key: 'E', color: 'green' },
      { key: 'A', color: 'green' },
      { key: 'M', color: 'green' },
      { key: 'S', color: 'green' },
    ]
  ];
  const gameOver = false;
  const onPush   = (_: {key: string}) => {};
  const subject  = (gameOver: boolean) => { render(<Keyboard history={history} onPush={onPush} gameOver={gameOver}/>, {}) };

  it('does not throw an error', () => {
    expect(() => { subject(false) }).not.toThrow();
  });

  describe('on game over', () => {
    const gameOver = true;

    it('does not throw an error', () => {
      expect(() => { subject(gameOver) }).not.toThrow();
    });
  });
});

