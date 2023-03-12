import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="relative w-full min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <Header onSetDarkMode={setDarkMode} darkMode={darkMode} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
