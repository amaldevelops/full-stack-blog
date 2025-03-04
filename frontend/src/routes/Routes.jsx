import App from "../components/App";
import AllPosts from "../components/AllPosts";
import ErrorPage from "../components/ErrorPage";

const readerRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reader",
    element: <AllPosts />,
    errorElement: <ErrorPage />,
  },
];

export default readerRoutes;
