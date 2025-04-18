import AllPosts from "./AllPosts";
import CreatePost from "./CreatePost";

function WriterHome() {
  return (
    <div>
      <h1>Blog Writer</h1>
      <AllPosts />
      <CreatePost />
    </div>
  );
}

export default WriterHome;
