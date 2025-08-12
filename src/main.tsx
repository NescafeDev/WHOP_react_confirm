import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { WhopIframeSdkProvider } from "@whop/react";

createRoot(document.getElementById('root')!).render(
  <WhopIframeSdkProvider appId="app_pOKUFqujK19Y3I">
    <StrictMode>
      <App />
    </StrictMode>
  </WhopIframeSdkProvider>
)
