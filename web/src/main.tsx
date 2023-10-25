import { ThemeProvider } from 'styled-components'
import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin'
import { WagmiConfig } from 'wagmi'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/normalize.css'
import { wagmiConfig } from './providers.ts'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <ThorinGlobalStyles />
      <WagmiConfig config={wagmiConfig}>
        <App />
      </WagmiConfig>
    </ThemeProvider>
  </React.StrictMode>
)
