import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Head from './Head'
import App1 from './Dugsiye/Exercise16/App1'
import App2 from './App2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    <App2/>
  </StrictMode>,
)
