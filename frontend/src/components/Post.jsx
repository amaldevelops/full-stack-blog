// This component will display a single post

import { Link } from "react-router-dom";

function Post() {
  return (
    <div>
      <h1>Test Post</h1>
      <Link to="/full-stack-blog/reader/home">Home</Link>
    </div>
  );
}

export default Post;
