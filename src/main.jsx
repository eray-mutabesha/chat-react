import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signin from '../src/component/SignIn'

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import SigninPage from './component/SigninPage'


const routes=createBrowserRouter([
  {
    path:"/",
    element:<Signin/>
},
  {
   path:"/signinPages",
   element:<SigninPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
