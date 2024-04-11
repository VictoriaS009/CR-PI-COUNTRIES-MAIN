import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="allNav">
      <div className="left">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/create">
          <h2>Create activity</h2>
        </Link>
      </div>

      <div className="right">
        <Link to="/">
          <h2>Log out</h2>
        </Link>
      </div>
    </div>
  );
};

export default Nav;