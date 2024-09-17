import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Wordle from '../lib/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wordle solution="dreams" totalTurns={6}/>
  </StrictMode>,
)

