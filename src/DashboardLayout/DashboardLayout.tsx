import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-gray-700">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 bg-gray-700  min-h-full  text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/dashproject">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addproduct">Add Projects</NavLink>
          </li>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
