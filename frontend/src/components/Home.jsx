import AllPosts from "./AllPosts";
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <h1>Blog DashBoard</h1>
      <Link>Write A new Post</Link>
      <AllPosts />
    </div>
  );
}

export default Home;
