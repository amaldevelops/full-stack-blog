import App from "../components/App";
// import AllPosts from "../components/AllPosts";
import Home from "../components/Home";
import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import CreatePost from "../components/CreatePost";
import Register from "../components/Register";
import APIDocs from "../components/APIDocs";
import Layout from "../components/Layout";

const Routes = [
  {
    element: <Layout />,
    children: [
      { path: "/full-stack-blog", element: <App />, errorElement: <ErrorPage /> },
      {
        path: "/full-stack-blog/reader/home",
        element: <Home />,
        children: [{ path: "post", element: <Post /> }],
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/writer/home",
        element: <CreatePost />,
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
        path: "/full-stack-blog/api-docs",
        element: <APIDocs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full-stack-blog/reader/posts/:id",
        element: <Post />,
        errorElement: <ErrorPage />,
      }
    ],
  },
  // {
  //   path: "/full-stack-blog",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/reader/home",
  //   element: <Home />,
  //   children: [{ path: "post", element: <Post /> }],
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/full-stack-blog/login",
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/full-stack-blog/writer/home",
  //   element: <CreatePost />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/full-stack-blog/register",
  //   element: <Register />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/full-stack-blog/api-docs",
  //   element: <APIDocs />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/full-stack-blog/reader/posts/:id",
  //   element: <Post />,
  //   errorElement: <ErrorPage />,
  // },
];

export default Routes;
