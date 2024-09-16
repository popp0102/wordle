import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import TileRow from '../../lib/components/TileRow';

describe('TileRow Component', () => {
  const entry = [
    { key: 'D',     color: 'green' },
    { key: 'R',     color: 'green' },
    { key: 'E',     color: 'green' },
    { key: 'A',     color: 'green' },
    { key: 'M',     color: 'green' },
    { key: 'S',     color: 'green' },
  ];
  const subject = () => { render(<TileRow entry={entry} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

