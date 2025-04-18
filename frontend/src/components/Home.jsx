import AllPosts from "./AllPosts";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Blog DashBoard</h1>
      <Outlet />
      <AllPosts />
    </div>
  );
}

export default Home;
