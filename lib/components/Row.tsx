type HistoryEntry = {
  key: string;
  color: string;
}[];

type RowProps = {
  entry: HistoryEntry;
}

export default function Row({ entry }: RowProps) {
  return (
    <div className="wordle-row">
      <div className={`wordle-tile wordle-${entry[0].color}`}>
        {entry[0].key}
      </div>
      <div className={`wordle-tile wordle-${entry[1].color}`}>
        {entry[1].key}
      </div>
      <div className={`wordle-tile wordle-${entry[2].color}`}>
        {entry[2].key}
      </div>
      <div className={`wordle-tile wordle-${entry[3].color}`}>
        {entry[3].key}
      </div>
      <div className={`wordle-tile wordle-${entry[4].color}`}>
        {entry[4].key}
      </div>
      <div className={`wordle-tile wordle-${entry[5].color}`}>
        {entry[5].key}
      </div>
    </div>
  );
}

