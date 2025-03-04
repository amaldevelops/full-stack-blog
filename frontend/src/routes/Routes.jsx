import App from "../components/App";
import AllPosts from "../components/AllPosts";
import ErrorPage from "../components/ErrorPage";

const readerRoutes = [
  {
    path: "/full-stack-blog",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/full-stack-blog/reader",
    element: <AllPosts />,
    errorElement: <ErrorPage />,
  },
];

export default readerRoutes;
