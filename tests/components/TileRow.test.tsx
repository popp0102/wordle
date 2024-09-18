import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import TileRow from '../../lib/components/TileRow';

describe('TileRow Component', () => {
  const entry = [
    { key: 'D', status: 'right' },
    { key: 'R', status: 'right' },
    { key: 'E', status: 'right' },
    { key: 'A', status: 'right' },
    { key: 'M', status: 'right' },
    { key: 'S', status: 'right' },
  ];
  const subject = () => { render(<TileRow entry={entry} colorConfig={{}} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

