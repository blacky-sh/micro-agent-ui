import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "../assets/images/burger-menu-svgrepo-com.png";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <Link to={`/chat`} className="btn btn-ghost text-xl">
          Micro Agent
        </Link>

        {!isLandingPage && (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-full w-12 h-12 p-2"
            >
              {/* icon from svgrepo.com */}
              <img src={menuIcon} alt="burger Menu" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black"
            >
              <li>
                <Link to={`/profile`}>My Profile</Link>
              </li>
              <li>
                <Link to={`/setting`}>Settings</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
