import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoginPage from "./../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Classroom from "../pages/Classroom/Classroom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/classroom",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/classroom",
        element: (
          <ProtectedRoute>
            <Classroom />
          </ProtectedRoute>
        ),
      },
      {
        path: "/classroom/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
