import App from "../components/App";
import ReaderHome from "../components/ReaderHome";
import WriterHome from "../components/WriterHome";
import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import APIDocs from "../components/Documentation";
import Layout from "../components/Layout";
import EditPost from "../components/EditPost";
import CreatePost from "../components/CreatePost";

const Routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/full-stack-blog",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/reader",
        element: <ReaderHome />,
        children: [{ path: "post", element: <Post /> }],
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/writer",
        element: <WriterHome />,
        children: [
          {
            path: "edit",
            element: <EditPost />,
            errorElement: <ErrorPage />,
          },
          {
            path: "newpost",
            element: <CreatePost />,
            errorElement: <ErrorPage />,
          },
        ],
        errorElement: <ErrorPage />,
      },

      {
        path: "/full-stack-blog/register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/api-docs",
        element: <APIDocs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/reader/posts/:id",
        element: <Post />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default Routes;
