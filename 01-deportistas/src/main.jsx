import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Tenis from './routes/tenis.jsx';
import Bici from './routes/bike.jsx';
import Futbol from './routes/football.jsx';
import Principal from './routes/principal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [      
      {
        path: "bike",
        element: <Bici />,        
      },
      {
        path: "football",
        element: <Futbol />,
      },
      {
        path: "principal",
        element: <Principal />,
      },
      {
        path: "tenis",
        element: <Tenis />,
      },
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    

    <RouterProvider router={router} />

  </React.StrictMode>,
)
