import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "./Search";
const Navbar = () => {
  return (
    <div>
      <nav className="py-4 border-b">
        <div className="navbar-container">
          {/* <!-- logo --> */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="search" width={115} height={45} />
            </Link>
          </div>
          {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
          <div className="auth-buttons">
            <div className="search-outline">
              <Search />
              <div className="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <button className="btn btn-primary">
              <a href="/">sign in</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
