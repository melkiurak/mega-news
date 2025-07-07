import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "@components/Login/Login";
import { NotFoundPage } from "@components/404/404";
import { Home } from "@page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
