import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { NotFoundPage } from "@components/404/404";
import { Home } from "@page/Home/Home";
import { Profile } from "@page/Profile/Profile";
import { SendPost } from "./page/Profile/SendPost/SendPost";
import { Auth } from "@page/Auth/Auth";
import { PostId } from "@page/PostId/PostId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Profile', element: <Profile />, children:[
        {path: 'Send-Post', element: <SendPost/>}
      ]},
      { path: "*", element: <NotFoundPage /> },
      { path: "/Auth", element: <Auth /> },
      { path: `/Post/:postId`, element: <PostId /> },
    ],
  },
]);
