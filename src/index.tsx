import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

setTimeout(() => {
  // @ts-ignore
  window.asticaAPI_start(import.meta.env.VITE_ASTICA_ACCESS_TOKEN)
}, 1000)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
