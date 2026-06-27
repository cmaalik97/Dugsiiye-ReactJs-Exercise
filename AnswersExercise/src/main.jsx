import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import Head from './Head'
// import App1 from './Dugsiye/Exercise16/App1'
// import App2 from './App2'
// import "./app.css"
import { RouterProvider } from 'react-router-dom'
// import { router } from './Dugsiye/Exercise25/routes.jsx'
import { routes } from './Dugsiye/Exercise26/Route/routes.jsx'
import { AuthProvider } from './Dugsiye/Exercise26/Context/AuthoContext.jsx'
import { PostsProvider } from './Dugsiye/Exercise26/Context/PostContext.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    {/* <App2/> */}
    {/* <RouterProvider router={router} /> */}
    
     <AuthProvider>
      <PostsProvider>
        <RouterProvider router={routes} />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
