import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Layout from "../components/Layout";
import Calendar from "../pages/calendar/Calendar";
import Candidate from "../pages/candidate/Candidate";
import Email from "../pages/email/Email";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/candidate",
        element: <Candidate />,
      },
      {
        path: "/email",
        element: <Email />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);
