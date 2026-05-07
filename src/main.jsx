import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter = wajib untuk GitHub Pages agar routing tidak 404 */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
