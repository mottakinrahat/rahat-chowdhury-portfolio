import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/dashboard/dashproject">
          dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar lg:absolute z-10  lg:px-40 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 flex justify-center items-center bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl">
              RAHAT<span className="text-[#8750F7]">PORTFOLIO</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end justify-end items-center gap-2">
          <button className="bg-[#8F5CF8] px-8 py-2 rounded-xl">Hire Me</button>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#8F5CF8] px-8 py-2 rounded-xl"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#8F5CF8] px-8 py-2 rounded-xl">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
