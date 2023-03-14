import React from "react";

const Footer = () => {
  return (
    <div className=" text-center absolute w-full bottom-0 p-5 border-t-[2px] border-gray-200 dark:border-gray-700">
      <p>
        &copy;2023{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          G Suite
        </span>
        , Inc.
      </p>
    </div>
  );
};

export default Footer;
