import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import KeyboardRow from '../../lib/components/KeyboardRow';


describe('Wordle Component', () => {
  const buttons = [
    { letter: 'd',     color: 'green' },
    { letter: 'r',     color: 'green' },
    { letter: 'e',     color: 'green' },
    { letter: 'a',     color: 'green' },
    { letter: 'm',     color: 'green' },
    { letter: 's',     color: 'green' },
    { letter: 'Enter', value: "Enter" }
  ];
  const onPush = (_: {key: string}) => {};
  const subject = () => { render(<KeyboardRow buttons={buttons} onPush={onPush}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

