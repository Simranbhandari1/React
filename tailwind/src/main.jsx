import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import New from './count'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <New />
  </StrictMode>,
)
