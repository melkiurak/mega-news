import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Login } from "@components/Login/Login";
import { NotFoundPage } from "@components/404/404";
import { Home } from "@page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
