import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {About,Contact} from './components'
import HomePage from './HomePage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{
    path: '/',
    element:<App/>,
    children: [{
      path:'',
      element:<HomePage/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path:'/contact',
      element: <Contact/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
