import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import KeyboardRow from '../../lib/components/KeyboardRow';


describe('Wordle Component', () => {
  const buttons = [
    { letter: 'D',     color: 'green' },
    { letter: 'R',     color: 'green' },
    { letter: 'E',     color: 'green' },
    { letter: 'A',     color: 'green' },
    { letter: 'M',     color: 'green' },
    { letter: 'S',     color: 'green' },
    { letter: 'Enter', value: "Enter" }
  ];
  const onPush = (_: {key: string}) => {};
  const subject = () => { render(<KeyboardRow buttons={buttons} onPush={onPush}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

