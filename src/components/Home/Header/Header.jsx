import { useState } from "react";
import "./HeaderStyle.css";

const Header = ({ setPage, onLogout, username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPopupOpen(true); // Set isPopupOpen to true when the cursor enters the icon
  };

  const handleMouseLeave = () => {
    setIsPopupOpen(false); // Set isPopupOpen to false when the cursor leaves the icon
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <>
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-logo">
              <div>
                <i className="logo-icon"></i>
              </div>
              <div className="nav-logo-head">Movie Maven</div>
            </div>
            <a className="skip-link" href="#main-id">
              Skip Navigation Links
            </a>
            <div className="nav-mobile-icon" onClick={toggle}>
              <i className="icon"></i>
            </div>
            <aside className={`sidebar-container ${isOpen ? "open" : "close"}`}>
              <div className="sidebar-icon">
                <i className="icon" onClick={toggle}></i>
              </div>
              <div className="sidebar-wrapper">
                <div className="siderbar-user-info">
                  <i className="siderbar-user-icon"></i>
                  <p className="siderbar-user-name">{username}</p>
                </div>
                <ul className="sidebar-menu">
                  <li className="sidebar-link">
                    <a
                      onClick={() => setPage("About") || setIsOpen(!isOpen)}
                      href="#About"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="sidebar-link">
                    <a
                      onClick={() => setPage("Explore") || setIsOpen(!isOpen)}
                      href="#Explore"
                    >
                      Browse Movies
                    </a>
                  </li>
                  <li className="sidebar-link">
                    <a
                      onClick={() =>
                        setPage("PostReview") || setIsOpen(!isOpen)
                      }
                      href="#PostReview"
                    >
                      Write a Review
                    </a>
                  </li>
                  <li className="sidebar-link">
                    <a
                      onClick={() => setPage("Reviews") || setIsOpen(!isOpen)}
                      href="#Reviews"
                    >
                      Movie Reviews
                    </a>
                  </li>
                </ul>
                <div className="sidebar-btn">
                  <div className="sidebar-text" onClick={onLogout}>
                    Logout
                  </div>
                </div>
              </div>
            </aside>
            <ul className="nav-menu">
              <li className="nav-item">
                <a
                  className="nav-links"
                  onClick={() => setPage("About")}
                  href="#About"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  onClick={() => setPage("Explore")}
                  href="#Explore"
                >
                  Browse Movies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  onClick={() => setPage("PostReview")}
                  href="#PostReview"
                >
                  Write a Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  onClick={() => setPage("Reviews")}
                  href="#Reviews"
                >
                  Movie Reviews
                </a>
              </li>
            </ul>
            <div className="nav-user-info">
              <div className="user-info">
                <p className="user-name">{username}</p>
                <i
                  className="user-icon"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                ></i>
              </div>
              {isPopupOpen && (
                <div
                  className="logout-wrapper"
                  onMouseEnter={handleMouseEnter} // Add event handler to keep popup open on cursor hover
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="logout-container">
                    <div className="logout-popup">
                      <h1 className="logout-popup-head">Account</h1>
                      <p className="logout-popup-para">{username}</p>
                    </div>
                    <button onClick={onLogout} className="logout-btn">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    </header>
  );
};

export default Header;
