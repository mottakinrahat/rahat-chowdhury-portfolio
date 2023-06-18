import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './component/Home/Home';
import MyProjects from './component/My Projects/MyProjects';
import ProjectDetails from './component/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
   path:'/',
   element:<Home></Home>
      },
      {
        path:'projects',
        element:<MyProjects></MyProjects>
      },
      {
        path:'projects/:id',
        element:<ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`http://localhost:5000/projects/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
