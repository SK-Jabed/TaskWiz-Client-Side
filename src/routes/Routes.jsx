import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";


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
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: (
//           <PrivateRoute>
//             <Statistics />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "addPublisher",
//         element: (
//           <PrivateRoute>
//             <AddPublisher />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "manageUsers",
//         element: (
//           <PrivateRoute>
//             <ManageUsers />
//           </PrivateRoute>
//         ),
//       },

//       {
//         path: "allArticles",
//         element: (
//           <PrivateRoute>
//             <AdminArticles />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
]);