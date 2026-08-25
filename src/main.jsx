import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/eb-garamond/latin-400.css'
import '@fontsource/eb-garamond/latin-ext-400.css'
import '@fontsource/work-sans/latin-300.css'
import '@fontsource/work-sans/latin-ext-300.css'
import '@fontsource/work-sans/latin-500.css'
import '@fontsource/work-sans/latin-ext-500.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-ext-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-ext-500.css'

import './styles/theme.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
