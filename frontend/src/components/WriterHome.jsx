import { Outlet } from "react-router-dom";

import AllPosts from "./AllPostsWriter";
import CreatePost from "./CreatePost";
import UserDetailsDisplay from "./UserDetails";

function WriterHome() {
  return (
    <div>
      <h1>Blog Writer</h1>
      <div>
        <UserDetailsDisplay />
      </div>

      <AllPosts />
      <Outlet />
      <CreatePost />
    </div>
  );
}

export default WriterHome;
