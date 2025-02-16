import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [authStatus, setAuthStatus] = useState("Login");

  return (
    <div className="flex justify-between bg-slate-300 m-2 p-2 shadow-lg">
      <div className="logo-container">
        <img className="w-[110px] h-[80px] rounded-lg border border-solid border-slate-600" src={LOGO_URL} x />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery" >Grocery</Link>
          </li>
          <li className="px-5">
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
