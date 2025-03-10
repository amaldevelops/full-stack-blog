import App from "../components/App";
import AllPosts from "../components/AllPosts";
import Home from "../components/Home";
import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login"

const Routes = [
  {
    path: "/full-stack-blog",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reader/home",
    element: <Home />,
    children: [{ path: "post", element: <Post /> }],
    errorElement: <ErrorPage />,
  },
  {
    path:"/full-stack-blog/login",
    element:<Login/>,
    errorElement:<ErrorPage/>
  }
];

export default Routes;
