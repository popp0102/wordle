export type HistoryEntry = {
  key: string;
  color: string;
}[];

export function transformToHistoryEntry(guess: string, solution: string): HistoryEntry {
  const solutionChars: string[] = [...solution].map((char) => char.toUpperCase());

  let historyEntry: HistoryEntry = [];
  [...guess].forEach((char, index) => {
    let color = 'gray';
    if (char === solutionChars[index]) {
      color = 'green';
      solutionChars[index] = "";
    }

    historyEntry.push({key: char, color: color});
  });

  [...guess].forEach((char, index) => {
    if(solutionChars[index]) {
      const containsIndex = solutionChars.indexOf(char);
      historyEntry[index].color = (containsIndex !== -1) ? 'yellow' : 'gray';
    }
  });

  return historyEntry;
}

export function guessToHistoryEntry(guess: string, wordLength: number) {
  const chars = [...guess, ...Array(wordLength - guess.length)];
  const entry = chars.map((char) => ( { key: char || '', color: 'white' } ));
  return entry;
}

export function isHistoryEntryCorrect(historyEntry: HistoryEntry, wordLength: number) {
  return (historyEntry.filter((x) => x.color === 'green') || []).length === wordLength;
}

