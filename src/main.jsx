import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="UpgcjVlB3dRT5WGqHzBmAVC3BjIa"
      baseUrl="https://api.asgardeo.io/t/sabtamorg"
      scopes="openid profile"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)