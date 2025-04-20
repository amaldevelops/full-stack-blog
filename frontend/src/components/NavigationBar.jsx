import { Link } from "react-router-dom";
import UserDetailsDisplay from "./UserDetails"

function NavigationBar() {
  return (
    <div>
      <Link to="/full-stack-blog" className="Links">
        Home
      </Link>
      <Link to="/full-stack-blog/login" className="Links">
        Login
      </Link>
      <Link to="/full-stack-blog/reader" className="Links">
        Blog Reader
      </Link>
      <Link to="/full-stack-blog/writer" className="Links">
        Blog Writer
      </Link>
      <Link to="/full-stack-blog/api-docs" className="Links">
        Documentation
      </Link>
      <div><UserDetailsDisplay/></div>
      

    </div>
  );
}

export default NavigationBar;
