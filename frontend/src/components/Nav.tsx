import { FC } from "react";
import { Link } from "react-router-dom";
const Nav: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="custom-icon">
            <i className="fa-solid fa-xl fa-home"></i>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="callback/github" className="custom-icon">
            <i className="fa-solid fa-xl fa-user-plus"></i>
          </Link>
        </li>
        <li>
          <Link to="/login" className="custom-icon">
            <i className="fa-solid fa-xl fa-right-to-bracket"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
