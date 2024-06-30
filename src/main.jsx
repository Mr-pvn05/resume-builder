import './index.css'
import React from 'react'
import App from './App.jsx'
import Home from './pages/Home'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/signup",
    element: <Signup/>
  },
  {
    path: "/auth/signin",
    element: <Signin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
