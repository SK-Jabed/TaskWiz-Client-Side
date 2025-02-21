import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AllTasks from "../pages/Dashboard/AllTasks";
import Statistics from "../pages/Dashboard/Statistics";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/authentication",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    //   {
    //     path: "register",
    //     element: <Register />,
    //   },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "allTasks",
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
    //   {
    //     path: "manageUsers",
    //     element: (
    //       <PrivateRoute>
    //         <ManageUsers />
    //       </PrivateRoute>
    //     ),
    //   },

    //   {
    //     path: "allArticles",
    //     element: (
    //       <PrivateRoute>
    //         <AdminArticles />
    //       </PrivateRoute>
    //     ),
    //   },
    ],
  },
]);