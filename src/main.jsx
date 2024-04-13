import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './component/HomePage';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Signup from './component/Signup';
import Tchat from './component/Tchat';
import RealTime from './component/RealTime';
import Login from './component/Login';
import Protected from './component/Protected';

const routes=createBrowserRouter([
 
  {
    path:"/",
    element:<HomePage/>
},
  {
   path:"/signup",
   element:<Signup />
  },
  {
    path:"/tchat",
    element:<Tchat />
  },
  {
    path:"realtime",
    element:<RealTime />
  },
  {
    path:"login",
    element:<Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
