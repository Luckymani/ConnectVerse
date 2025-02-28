import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Public/Landing";
import SignUp from "../pages/Public/SignUp";
import SignIn from "../pages/Public/SignIn";
import Dashboard from "../pages/Private/Dashboard";
import Error from "../pages/Misc/Error";
import Layout from "./Layout";
import Settings from "../pages/Private/Settings";
import Profile from "../pages/Private/Profile";
import Logout from "../pages/Private/Logout";
import Explore from "../pages/Private/Explore";
import Appearance from "../pages/Private/Appearance";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/explore",
        element: <Explore />,
      },
    ],
  },
  {
    path: "/dashboard/settings/",
    element: <Settings />,
    children: [
      {
        path: "/dashboard/settings/account",
        element: <Profile />,
      },
      {
        path: "/dashboard/settings/logout",
        element: <Logout />,
      },
      {
        path: "/dashboard/settings/appearance",
        element: <Appearance />,
      },
    ],
  },
]);

export default Router;
