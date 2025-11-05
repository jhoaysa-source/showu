// React i renderització de l'app
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Chakra UI per estil global i temes
import { ChakraProvider } from '@chakra-ui/react'

// React Router per gestionar les rutes
import { BrowserRouter } from 'react-router-dom'

// Arrel de l'aplicació
import App from './App.jsx'

// Import del context d'autenticació global
import { AuthProvider } from './context/AuthContext'

// Renderitza l'aplicació dins de l'element amb id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Proporciona estil global a tota l'app */}
    <ChakraProvider>

      {/* Gestiona la navegació amb rutes */}
      <BrowserRouter>

        {/* Proporciona el context d'autenticació a tota l'app */}
        <AuthProvider>
          <App />
        </AuthProvider>

      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)