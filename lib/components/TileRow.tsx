import { type HistoryEntry } from '../util/HistoryEntry';

type RowProps = {
  entry: HistoryEntry;
  colorConfig: { [ key: string]: string };
}

interface TileBackgroundProperty extends React.CSSProperties {
  '--tile-background'?: string;
}

export default function TileRow({ entry, colorConfig }: RowProps) {
  return (
    <div className="wordle-row">
      {
        entry.map((entryPiece, index) => {
          const status = entryPiece.status;
          const color = colorConfig[status];
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

