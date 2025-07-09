import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Login } from "@components/Login/Login";
import { NotFoundPage } from "@components/404/404";
import { Home } from "@page/Home/Home";
import { Profile } from "@page/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Profile', element: <Profile /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
