import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { IoAlbumsSharp } from "react-icons/io5";
import logo from "../../assets/logo/taskwiz-logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[74px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TaskWiz Logo" className="h-10 w-auto" />
          <span className="hidden lg:block text-2xl font-bold">
            Task<span className="text-cyan-600">Wiz</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 font-medium flex items-center gap-1"
                    : "text-gray-800 hover:text-cyan-500 font-medium flex items-center gap-1"
                }
              >
                <FaHome /> <span>Home</span>
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 font-medium flex items-center gap-1"
                    : "text-gray-800 hover:text-cyan-500 font-medium flex items-center gap-1"
                }
              >
                <IoAlbumsSharp /> Profile
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/dashboard/taskBoard"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 font-medium flex items-center gap-1"
                    : "text-gray-800 hover:text-cyan-500 font-medium flex items-center gap-1"
                }
              >
                <IoAlbumsSharp /> Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Authentication Buttons */}
          {!user ? (
            <NavLink
              to="/authentication/login"
              className="bg-teal-500 px-5 py-2 text-white font-medium rounded-md hover:bg-teal-700 transition"
            >
              Login
            </NavLink>
          ) : (
            <div className="flex items-center gap-2">
              {/* Profile Avatar */}
              <Link to={"/dashboard/taskBoard"}>
                <button className="flex items-center gap-2">
                  <img
                    src={user?.photoURL}
                    alt="User Profile"
                    title={user?.displayName}
                    className="w-11 h-11 rounded-full border-2 border-gray-300 shadow-md hover:border-indigo-600 hover:border-2 transition-all duration-300 cursor-pointer"
                  />
                </button>
              </Link>

              {/* Logout Button */}
              <button
                className="px-5 py-2 rounded-lg bg-gray-900 text-white font-medium shadow-md hover:bg-gray-950 transition-all duration-300 cursor-pointer"
                onClick={logOut}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
