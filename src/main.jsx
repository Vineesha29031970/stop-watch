import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TimerContextProvider } from './components/TimerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
    </TimerContextProvider>
  </React.StrictMode>,
)
