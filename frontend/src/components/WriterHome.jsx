import AllPosts from "./AllPosts";
import CreatePost from "./CreatePost";
import {decodeJWTPayload} from "../utils/apiAdminQueries";

function WriterHome() {
  decodeJWTPayload();
  return (
    <div>
      <h1>Blog Writer</h1>
      <AllPosts />
      <CreatePost />
    </div>
  );
}

export default WriterHome;
