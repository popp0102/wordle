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

