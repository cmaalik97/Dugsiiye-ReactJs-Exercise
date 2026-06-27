import AppMain from "../AppMain";
import CreatePost from "../Pages/CreatePost";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import PostDetail from "../Pages/PostDetail";
import ProtectRoute from "../Pages/ProtectRout";
import { createBrowserRouter } from "react-router-dom";

export const routes= createBrowserRouter([
  {
    path: '/',
    element: <AppMain />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'posts/:postId',
        element: <PostDetail />,
      },
      {
        path: 'create',
        element: (
            <ProtectRoute>
                <CreatePost />
            </ProtectRoute>
            
         
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])