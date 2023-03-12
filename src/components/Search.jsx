import React, { useState } from "react";
import searchIcon from "../assets/search.svg";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="bg-[#737373] dark:bg-white px-3 mx-4 sm:px-5 py-1 sm:py-2 rounded-full flex items-center">
      <input
        type="text"
        className="w-full outline-none bg-transparent text-white dark:text-gray-700"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="button">
        <img src={searchIcon} alt="searchIcon" className="w-8 " />
      </button>
    </div>
  );
};

export default Search;
