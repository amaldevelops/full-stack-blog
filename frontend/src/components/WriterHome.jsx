import AllPosts from "./AllPosts";
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
      <CreatePost />
    </div>
  );
}

export default WriterHome;
