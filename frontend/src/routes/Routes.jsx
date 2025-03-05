import App from "../components/App";
import AllPosts from "../components/AllPosts";
import Home from "../components/Home";
import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";

const Routes = [
  {
    path: "/full-stack-blog",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/full-stack-blog/reader/home",
    element: <Home />,
    children: [{ path: "post", element: <Post /> }],
    errorElement: <ErrorPage />,
  },
];

export default Routes;
