import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './component/HomePage';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import SigninPage from './component/SigninPage'
import Tchat from './component/Tchat';
import RealTime from './component/RealTime';


const routes=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
},
  {
   path:"/signinPages",
   element:<SigninPage />
  },
  {
    path:"/tchat",
    element:<Tchat />
  },
  {
    path:"realtime",
    element:<RealTime />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
