import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FirstHeader = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookStoreClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 2) {
      const isAdmin = window.confirm("Are you an admin?");
      if (isAdmin) {
        navigate("/AdminLogin");
      } else {
        alert("You are not an admin.");
      }
      setClickCount(0);
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container">
        {/* Book Store Title */}
        <h3 style={{ cursor: "pointer" }} onClick={handleBookStoreClick}>
          Book Store
        </h3>

        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto"> {/* Center items here */}
            {/* Home Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>

            {/* Start Selling */}
            <li className="nav-item">
              <Link className="nav-link" to="/SellerSignUp" onClick={toggleNavbar}>
                Start Selling
              </Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/solution"
                id="solutionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solution
              </Link>
              <ul className="dropdown-menu" aria-labelledby="solutionDropdown">
                <li><Link className="dropdown-item" to="/solution" onClick={toggleNavbar}>Solution</Link></li>
                <li><a className="dropdown-item" href="#catalog" onClick={toggleNavbar}>Catalog</a></li>
                <li><a className="dropdown-item" href="#patron" onClick={toggleNavbar}>Patron management</a></li>
                <li><a className="dropdown-item" href="#circulation" onClick={toggleNavbar}>Circulation</a></li>
                <li><a className="dropdown-item" href="#serialTracking" onClick={toggleNavbar}>Serial Tracking</a></li>
                <li><a className="dropdown-item" href="#inventory" onClick={toggleNavbar}>Inventory</a></li>
                <li><a className="dropdown-item" href="#reports" onClick={toggleNavbar}>Reports</a></li>
                <li><a className="dropdown-item" href="#opacApps" onClick={toggleNavbar}>Online Patron Access</a></li>
                <li><a className="dropdown-item" href="#mobile" onClick={toggleNavbar}>Mobile App</a></li>
              </ul>
            </li>

            {/* Customer */}
            <li className="nav-item">
              <Link className="nav-link" to="/customer" onClick={toggleNavbar}>
                Customer
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={toggleNavbar}>
                Support
              </Link>
            </li>
          </ul>

          {/* Sign In and Get Started (Visible on all screen sizes) */}
          <div className="d-flex ms-auto">
            <Link to="/signIn" className="btn btn-outline-primary me-2" onClick={toggleNavbar}>
              Sign In
            </Link>
            <Link to="/signUp" className="btn btn-primary" onClick={toggleNavbar}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FirstHeader;
