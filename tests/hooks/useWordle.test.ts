import { renderHook, act } from '@testing-library/react';
import useWordle from '../../lib/hooks/useWordle';

describe('useWordle', () => {
  const solution  = 'dreams'
  const onGameEnd: jest.MockedFunction<(didWin: boolean) => void> = jest.fn();
  const subject   = () => { return renderHook(() => useWordle(solution, onGameEnd)) };

  it('does not throw an error', () => {
    const { result } = subject();
    expect(result.current).toBeDefined();
  });

  describe('push a key', () => {
    it('should set the current guess', () => {
      const { result } = subject();
      act(() => {
        result.current.keyPushed({ key: 'J' });
      });
      expect(result.current.currentGuess).toBe('J');
    });
  });

  describe('guess a whole word correctly', () => {
    it('should set the player win if they guess correctly', () => {
      const { result, rerender } = subject();

      ['d','r','e','a','m','s','Enter'].forEach((key) => {
        act(() => {
          result.current.keyPushed({ key: key });
          rerender();
        });
      });

      expect(result.current.didPlayerWin).toBe(true);
    });
  });

  describe('delete some characters and submit incorrect word', () => {
    it('should set the player win if they guess correctly', () => {
      const { result, rerender } = subject();

      ['d','Backspace','a','b','c','d','e','f','Enter'].forEach((key) => {
        act(() => {
          result.current.keyPushed({ key: key });
          rerender();
        });
      });

      expect(result.current.didPlayerWin).toBe(false);
    });
  });

  describe('player loses', () => {
    it('should set gameOver and didPlayerWin correctly', () => {
      const { result, rerender } = subject();

      for(let i = 0; i < 8; i++) {
        ['a','b','c','d','e','f','Enter'].forEach((key) => {
          act(() => {
            result.current.keyPushed({ key: key });
            rerender();
          });
        });
      }

      expect(result.current.didPlayerWin).toBe(false);
      expect(result.current.gameOver).toBe(true);
    });
  });
});

