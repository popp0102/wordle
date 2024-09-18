import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Wordle from '../lib/index';

let config =  {
  right: 'green',
  almost: 'yellow',
  wrong: 'gray',
  neutral: 'gainsboro',
  tile: 'white',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wordle solution="dreams" totalTurns={6} config={config}/>
  </StrictMode>,
)

