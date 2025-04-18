import AllPosts from "./AllPosts";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ReaderHome() {
  return (
    <div>
      <h1>Blog Reader</h1>
      <Outlet />
      <AllPosts />
    </div>
  );
}

export default ReaderHome;
