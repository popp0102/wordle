import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Row from '../../lib/components/Row';

describe('Row Component', () => {
  const entry = [
    { key: 'd',     color: 'green' },
    { key: 'r',     color: 'green' },
    { key: 'e',     color: 'green' },
    { key: 'a',     color: 'green' },
    { key: 'm',     color: 'green' },
    { key: 's',     color: 'green' },
  ];
  const subject = () => { render(<Row entry={entry} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

