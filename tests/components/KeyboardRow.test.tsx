import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import KeyboardRow from '../../lib/components/KeyboardRow';


describe('Wordle Component', () => {
  const buttons = [
    { letter: 'D',     type: 'key',     color: 'green' },
    { letter: 'R',     type: 'key',     color: 'green' },
    { letter: 'E',     type: 'key',     color: 'green' },
    { letter: 'A',     type: 'key',     color: 'green' },
    { letter: 'M',     type: 'key',     color: 'green' },
    { letter: 'S',     type: 'key',     color: 'green' },
    { letter: 'Enter', type: 'special', color: 'gainsboro' }
  ];
  const onPush = (_: {key: string}) => {};
  const subject = () => { render(<KeyboardRow buttons={buttons} onPush={onPush}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

