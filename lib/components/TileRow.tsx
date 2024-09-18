import { type HistoryEntry } from '../util/HistoryEntry';

type RowProps = {
  entry: HistoryEntry;
}

const COLOR_MAP: { [ key: string]: string } = {
  right: 'green',
  almost: 'yellow',
  wrong: 'gray',
  keyboard: 'gainsboro',
  blank: 'white',
}

interface TileBackgroundProperty extends React.CSSProperties {
  '--tile-background'?: string;
}

export default function TileRow({ entry }: RowProps) {
  return (
    <div className="wordle-row">
      {
        entry.map((entryPiece, index) => {
          const status = entryPiece.status;
          const color = COLOR_MAP[status];
          const flipClass = (status === 'blank') ? '' : 'wordle-flip';
          return (
            <div
              className={`wordle-tile ${flipClass}`}
              style={{'--tile-background': color} as TileBackgroundProperty }
              key={`${entryPiece.key}${index}`}
            >
              {entryPiece.key}
            </div>
          )
        })
      }
    </div>
  );
}

