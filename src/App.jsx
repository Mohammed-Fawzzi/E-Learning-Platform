import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

// User
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Quiz from "./Components/Quiz/Quiz";
import Summaries from "./Components/Summaries/Summaries";

// Admin
import AdminLogin from "./Components/Admin/login";
import AdminDashboard from "./Components/Admin/Dashboard";
import AddStudent from "./Components/Admin/AddStudent";
import Students from "./Components/Admin/Students";
import AddAdmin from "./Components/Admin/AddAdmin";
import Admins from "./Components/Admin/Admins";
import AddExam from "./Components/Admin/AddExam";
import StudentsGrades from "./Components/Admin/StudentGrades";

// Protected Route
import AdminProtectedRoute from "./Components/ProtectedRoutes/AdminProtectedRoute";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        // User
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/quiz", element: <Quiz /> },
        { path: "/summaries", element: <Summaries /> },

        // Admin
        { path: "/admin-login", element: <AdminLogin /> },
        {
          path: "/admin-dashboard",
          element: (
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/add-student",
          element: (
            <AdminProtectedRoute>
              <AddStudent />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/students",
          element: (
            <AdminProtectedRoute>
              <Students />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/add-admin",
          element: (
            <AdminProtectedRoute>
              <AddAdmin />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/admins",
          element: (
            <AdminProtectedRoute>
              <Admins />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/add-exam",
          element: (
            <AdminProtectedRoute>
              <AddExam />{" "}
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/student-grades",
          element: (
            <AdminProtectedRoute>
              <StudentsGrades />
            </AdminProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
