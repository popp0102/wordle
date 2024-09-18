export type HistoryEntry = {
  key: string;
  status: string;
}[];

export function getLetterStatus(history: HistoryEntry[], letter: string) {
  let status = 'neutral';
  history.forEach((historyEntry) => {
    historyEntry.forEach((entry) => {
      if (entry.key !== letter) {
        return;
      }

      if (entry.status === 'right') {
        status = 'right';
      } else if (entry.status === 'almost' && status !== 'right') {
        status = 'almost';
      } else if (entry.status === 'wrong' && status !== 'right' && status !== 'almost') {
        status = 'wrong';
      }
    });
  });

  return status;
}

export function transformToHistoryEntry(guess: string, solution: string): HistoryEntry {
  const solutionChars: string[] = [...solution].map((char) => char.toUpperCase());

  let historyEntry: HistoryEntry = [];
  [...guess].forEach((char, index) => {
    let status = 'wrong';
    if (char === solutionChars[index]) {
      status = 'right';
      solutionChars[index] = "";
    }

    historyEntry.push({key: char, status: status});
  });

  [...guess].forEach((char, index) => {
    if(solutionChars[index]) {
      const containsIndex = solutionChars.indexOf(char);
      historyEntry[index].status = (containsIndex !== -1) ? 'almost' : 'wrong';
    }
  });

  return historyEntry;
}

export function guessToHistoryEntry(guess: string, wordLength: number) {
  const chars = [...guess, ...Array(wordLength - guess.length)];
  const entry = chars.map((char) => ( { key: char || '', status: 'blank' } ));
  return entry;
}

export function isHistoryEntryCorrect(historyEntry: HistoryEntry, wordLength: number) {
  return (historyEntry.filter((x) => x.status === 'right') || []).length === wordLength;
}

