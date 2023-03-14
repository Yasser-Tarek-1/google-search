import React from "react";
import { NavLink } from "react-router-dom";

const routes = ["search", "images"];

const NavBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 pt-4 sm:pt-1">
      {routes.map((route, idx) => {
        return (
          <NavLink to={route} key={idx}>
            {({ isActive }) => (
              <div
                className={` 
                relative dark:border-blue-400 capitalize border-blue-600 pb-[2px]
                before:content-[""] before:absolute before:bottom-0 before:left-0
                 before:h-[2px] before:bg-blue-600 before:dark:bg-blue-400
                 ${isActive ? "before:w-full" : "hover:before:w-full"}
                 `}
              >
                {route === "search" ? "All" : route}
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavBar;
