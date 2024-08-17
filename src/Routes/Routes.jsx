import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoginPage from "./../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Classroom from "../pages/Classroom/Classroom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/classroom",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/classroom", element: <Classroom /> }],
  },
]);

export default routes;
