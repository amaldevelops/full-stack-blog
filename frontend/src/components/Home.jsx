import AllPosts from "./AllPosts";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// import Post from "../components/Post";

function Home() {
  return (
    <div>
      <h1>Blog DashBoard</h1>
      {/* <Link to="post">Write a new Post</Link> */}
      <Outlet />
      <AllPosts />
    </div>
  );
}

export default Home;
