import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="NavigationBarDiv">
      <Link to="/full-stack-blog" className="Links">
        Home
      </Link>
      <Link to="/writer/home" className="Links">
        Create Posts
      </Link>
    </div>
  );
}

export default NavigationBar;
