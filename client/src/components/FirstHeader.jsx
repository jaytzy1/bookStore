
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FirstHeader = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleBookStoreClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 2) {
      const isAdmin = window.confirm("Are you an admin?");
      if (isAdmin) {
        navigate("/AdminLogin"); // Redirect to sign-in if admin
      } else {
        alert("You are not an admin.");
      }
      setClickCount(0); // Reset click count
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container">
          <h3
            style={{ cursor: "pointer" }}
            onClick={handleBookStoreClick}
          >
            Book Store
          </h3>
          <div className="d-flex justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/SellerSignUp">
                  Start Selling
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <Link
                data-bs-toggle="dropdown"
                className="nav-link text-dark"
                to="/solution"
                aria-expanded="false"
              >
                Solution
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/solution">
                    Solution
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#catalog">
                    Catalog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#patron">
                    Patron management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#circulation">
                    Circulation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#serialTracking">
                    Serial Tracking
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#inventory">
                    Inventory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#reports">
                    Reports
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#opacApps">
                    Online Patron Access
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#mobile">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signIn" className="nav-link">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signUp" className="btn btn-primary">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FirstHeader;
