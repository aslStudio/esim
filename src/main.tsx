import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app/App.tsx'

// import './main.scss'
import './shared/styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)