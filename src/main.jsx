import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ]
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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
