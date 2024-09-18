import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Keyboard from '../../lib/components/Keyboard';


describe('Wordle Component', () => {
  const history = [
    [
      { key: 'A', status: 'almost' },
      { key: 'B', status: 'wrong' },
      { key: 'D', status: 'almost' },
      { key: 'E', status: 'almost' },
      { key: 'M', status: 'almost' },
      { key: 'A', status: 'wrong' },
    ],
    [
      { key: 'D', status: 'right' },
      { key: 'R', status: 'right' },
      { key: 'E', status: 'right' },
      { key: 'A', status: 'right' },
      { key: 'M', status: 'right' },
      { key: 'S', status: 'right' },
    ]
  ];
  const disable = false;
  const onPush  = (_: {key: string}) => {};
  const subject = (disable: boolean) => { render(<Keyboard history={history} onPush={onPush} disable={disable}/>, {}) };

  it('does not throw an error', () => {
    expect(() => { subject(false) }).not.toThrow();
  });

  describe('disable the keyboard', () => {
    const disable = true;

    it('does not throw an error', () => {
      expect(() => { subject(disable) }).not.toThrow();
    });
  });
});

