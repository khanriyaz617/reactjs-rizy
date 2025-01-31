import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [authStatus, setAuthStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} x />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                console.log("clicked");
                authStatus === "Login"
                  ? setAuthStatus("Logout")
                  : setAuthStatus("Login");
              }}
            >
              {authStatus}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
