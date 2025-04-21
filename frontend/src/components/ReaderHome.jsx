import AllPosts from "./AllPostsReader";
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
