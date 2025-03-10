import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="NavigationBarDiv">
      <Link to="/full-stack-blog" className="Links">
        Home
      </Link>
      <Link to="/full-stack-blog/login">Login</Link>
      <Link to="/full-stack-blog/writer/home" className="Links">
        Create New Post
      </Link>
    </div>
  );
}

export default NavigationBar;
