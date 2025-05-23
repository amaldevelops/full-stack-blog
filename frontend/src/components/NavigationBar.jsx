import { Link, useNavigate } from "react-router-dom";
import { clearJwtLogOut } from "../utils/apiAdminQueries";

function NavigationBar() {
  const Navigate = useNavigate();

  const handleLogOut = async (event) => {
    event.preventDefault();
    await clearJwtLogOut();
    Navigate("/full-stack-blog");
  };

  return (
    <div>
      <Link to="/full-stack-blog" className="Links">
        Home / Documentation
      </Link>

      <Link to="/full-stack-blog/reader" className="Links">
        Blog Reader
      </Link>
      <Link to="/full-stack-blog/writer" className="Links">
        Blog Writer
      </Link>
      <Link to="/full-stack-blog/login" className="Links">
        Login
      </Link>
      <Link to="/full-stack-blog" onClick={handleLogOut}>
        Logout
      </Link>
    </div>
  );
}

export default NavigationBar;
