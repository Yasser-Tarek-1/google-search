import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <NavLink to="/">
        {({ isActive }) => (
          <div
            className={
              isActive
                ? "border-b border-cyan-400"
                : "hover:border-b border-cyan-400"
            }
          >
            Result
          </div>
        )}
      </NavLink>
      <NavLink to="/images">
        {({ isActive }) => (
          <div
            className={
              isActive
                ? "border-b border-cyan-400"
                : "hover:border-b border-cyan-400 transition-all"
            }
          >
            Images
          </div>
        )}
      </NavLink>
      <NavLink to="/news">
        {({ isActive }) => (
          <div
            className={
              isActive
                ? "border-b border-cyan-400"
                : "hover:border-b border-cyan-400 transition-all"
            }
          >
            News
          </div>
        )}
      </NavLink>
      <NavLink to="/videos">
        {({ isActive }) => (
          <div
            className={
              isActive
                ? "border-b border-cyan-400"
                : "hover:border-b border-cyan-400 transition-all"
            }
          >
            Videos
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default NavBar;
