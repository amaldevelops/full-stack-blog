import App from "../components/App";
import AllPosts from "../components/AllPosts";
import Home from "../components/Home";
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
    errorElement: <ErrorPage />,
  },
  {
    path: "/full-stack-blog/reader/home/post",
  },
];

export default Routes;
