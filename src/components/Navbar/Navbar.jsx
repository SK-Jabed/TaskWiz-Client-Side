// import React from "react";
// import logo from "../../assets/logo/taskwiz-logo.png";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import { FaHome } from "react-icons/fa";
// import { IoAlbumsSharp } from "react-icons/io5";

// const Navbar = () => {
//   const { user, logOut } = useAuth();

//   return (
//     <div className="h-[74px]">
//       <div className="navbar bg-white shadow-sm w-full px-4 md:px-8 border-b-2 z-50 fixed backdrop-blur-md">
//         <div className="w-11/12 container mx-auto">
//           <div className="flex-1 flex-wrap">
//             <Link to="/" className="flex gap-2 items-center">
//               <img className="w-auto h-10" src={logo} alt="" />
//               <span className="font-bold text-3xl text hidden lg:block">
//                 Task<span className="text-cyan-600">Wiz</span>
//               </span>
//             </Link>
//           </div>
//           <div className="flex items-center justify-center">
//             <ul className="flex items-center justify-center gap-4 px-1 mr-2">
//               <li className="flex">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-base font-medium text-cyan-400 flex items-center gap-1"
//                       : "text-base font-medium text-gray-800 hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 flex items-center gap-1"
//                   }
//                   to={"/"}
//                 >
//                   <FaHome /> 
//                   <span>Home</span>
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-base font-medium text-cyan-400 flex items-center gap-1"
//                       : "text-base font-medium text-gray-800 hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 flex items-center gap-1"
//                   }
//                   to={"/profile"}
//                 >
//                   <IoAlbumsSharp /> Profile
//                 </NavLink>
//               </li>

//               {!user && (
//                 <div className="flex justify-center items-center gap-2">
//                   <div className="sm:flex sm:gap-2">
//                     <NavLink
//                       className="rounded-md bg-teal-500 px-5 py-2 text-base font-medium text-white shadow hover:bg-teal-700"
//                       to={"/authentication/login"}
//                     >
//                       Login
//                     </NavLink>
//                   </div>
//                 </div>
//               )}
//             </ul>

//             {user && (
//               <div className="dropdown dropdown-end z-50">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost btn-circle avatar ml-2"
//                 >
//                   <div title={user?.displayName} className="w-11 rounded-full">
//                     <img
//                       referrerPolicy="no-referrer"
//                       alt="User Profile Photo"
//                       src={user?.photoURL}
//                     />
//                   </div>
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-600 dark:text-white rounded-box w-52"
//                 >
//                   <li>
//                     <Link to="/authentication/login" className="justify-between">
//                       Add Items
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/authentication/login">My Items</Link>
//                   </li>
//                   <li className="mt-2">
//                     <button
//                       onClick={logOut}
//                       className="bg-red-500 text-white hover:bg-red-700 block text-center"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



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

            <li>
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
            <div className="flex items-center gap-4">
              {/* Profile Avatar */}
              <Link to={"/profile"}>
              <button className="flex items-center gap-2">
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  title={user?.displayName}
                  className="w-12 h-12 rounded-full border"
                />
              </button>
              </Link>
              {/* <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 bg-red-500 text-white hover:bg-red-600"
                  >
                    Logout
                  </button> */}
            </div>
            
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
