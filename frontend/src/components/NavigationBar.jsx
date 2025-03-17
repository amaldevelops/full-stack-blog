import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Link to="/full-stack-blog" className="Links">
        Home
      </Link>
      <Link to="/full-stack-blog/login">Login</Link>
      <Link to="/full-stack-blog/writer/home" className="Links">
        Create New Post
      </Link>
      <Link to="/full-stack-blog/api-docs">API Docs</Link>
    </div>
  );
}

export default NavigationBar;
