import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Wordle from '../../lib/components/Wordle';

describe('Wordle Component', () => {
  const solution = "dreams";

  describe('player wins', () => {
    const onGameFinish: jest.MockedFunction<(didWin: boolean) => void> = jest.fn();
    const subject = () => { render(<Wordle solution={solution} onGameFinish={onGameFinish} totalTurns={8} />, {}) };

    it('by pushing keys from a real keyboard', async () => {
      subject();

      ['d', 'r', 'e', 'a', 'm', 's', '{Enter}'].forEach((key) => {
        userEvent.keyboard(key);
      });

      await waitFor(() => {
        expect(onGameFinish).toHaveBeenCalledWith(true);
      });
    });

    it('by pushing buttons with the on-screen keyboard', async () => {
      subject();

      ['D', 'R', 'E', 'A', 'M', 'S', 'Enter'].forEach((key) => {
        const letterButton = screen.getByTestId(`wordle-keyboard-key-${key}`);
        userEvent.click(letterButton);
      });

      await waitFor(() => {
        expect(onGameFinish).toHaveBeenCalledWith(true);
      });
    });
  });

  describe('player loses', () => {
    const onGameFinish: jest.MockedFunction<(didWin: boolean) => void> = jest.fn();
    const subject = () => { render(<Wordle solution={solution} onGameFinish={onGameFinish} totalTurns={8} />, {}) };

    it('should lose after running out of tries', async () => {
      subject();

      for (let i = 0; i < 9; i++) {
        ['c', 'c', 'e', 'a', 'm', 's', '{Enter}'].forEach((key) => {
          userEvent.keyboard(key);
        });
      }

      await waitFor(() => {
        expect(onGameFinish).toHaveBeenCalledWith(false);
      });
    });
  });
});

