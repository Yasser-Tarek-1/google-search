import React from "react";
import { Link } from "react-router-dom/dist";
import googleIcon from "../assets/google.svg";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import Search from "./Search";
import NavBar from "./NavBar";

const Header = ({ darkMode, onSetDarkMode }) => {
  return (
    <div className="w-full pt-1 relative border-b-[2px] border-gray-200 dark:border-gray-700 ">
      <div className="flex p-2 sm:p-5 justify-between items-center ">
        <div className="w-24">
          <Link to={"/"}>
            <img
              src={googleIcon}
              alt="googleIcon"
              className="w-full blue dark:blue-dark"
            />
          </Link>
        </div>
        <Search />
        <div className="w-16 sm:w-24 text-right flex items-center justify-center mt-[2px]">
          <button
            type="button"
            onClick={() => onSetDarkMode(!darkMode)}
            className="text-xl bg-white dark:bg-gray-50 dark:text-gray-900 py-1 sm:py-2 px-3 sm:px-5 rounded-full hover:shadow-lg transition-all"
          >
            {darkMode ? (
              <img src={sunIcon} alt="Light" className="w-6 sun-icon" />
            ) : (
              <img src={moonIcon} alt="Dark" className="w-6 blue" />
            )}
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
