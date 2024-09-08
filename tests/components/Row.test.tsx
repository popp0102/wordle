import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Row from '../../lib/components/Row';

describe('Row Component', () => {
  const entry = [
    { key: 'D',     color: 'green' },
    { key: 'R',     color: 'green' },
    { key: 'E',     color: 'green' },
    { key: 'A',     color: 'green' },
    { key: 'M',     color: 'green' },
    { key: 'S',     color: 'green' },
  ];
  const subject = () => { render(<Row entry={entry} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

