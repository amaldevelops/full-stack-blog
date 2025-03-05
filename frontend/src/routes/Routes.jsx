import App from "../components/App";
import AllPosts from "../components/AllPosts";
import ErrorPage from "../components/ErrorPage";

const Routes = [
  {
    path: "/full-stack-blog",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/full-stack-blog/reader/home",
    element: <AllPosts />,
    errorElement: <ErrorPage />,
  },
];

export default Routes;
