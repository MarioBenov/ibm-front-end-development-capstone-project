import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setClick(!click);

  const handleShowProfile = () => {
    setShow(!show);
    return show;
  };
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    setUsername("");

    // Remove the reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail("");
    window.location.reload();
  };
  useEffect(() => {
    const storedemail = sessionStorage.getItem("email");

    if (storedemail) {
      setIsLoggedIn(true);
      setEmail(storedemail);
      setUsername(storedemail);
    }
  }, []);
  return (
    <nav>
      <div className="nav-brand">
        <Link to="/">
          <i className="bi bi-activity"></i> StayHealthy
        </Link>
      </div>
      <div className="nav-button" onClick={handleClick}>
        <i className={click ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>
      <ul className={click ? "nav-links active" : "nav-links"}>
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <Link to="/consultation">Appointments</Link>
        </li>
        <li className="link">
          <a href="/">Health Blog</a>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              <ProfileCard onClick={handleShowProfile}>
                Welcome, {email.split("@")[0] || username.split("@")[0]}
              </ProfileCard>
              {/* Welcome, {email.split("@")[0] || username.split("@")[0]} */}
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;