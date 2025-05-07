import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, App1 } from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1 />
  </StrictMode>,
)
console.log(App,App1)
