import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./component/Home/Home";
import MyProjects from "./component/My Projects/MyProjects";
import ProjectDetails from "./component/ProjectDetails/ProjectDetails";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import AuthProviders from "./component/AuthProviders/AuthProviders";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import DashProjects from "./DashboardLayout/DashProjects/DashProjects";
import AddProduct from "./DashboardLayout/AddProduct/AddProduct";
import UpdateProduct from "./DashboardLayout/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://rahat-portfolio-server-phi.vercel.app/projects/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "dashproject",
        element: <DashProjects></DashProjects>,
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "updateproduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/projects/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
