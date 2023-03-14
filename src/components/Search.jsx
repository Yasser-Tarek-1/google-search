import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.svg";
import closeIcon from "../assets/close.svg";
import { updateSearchTerm } from "../store/inputSlice";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(updateSearchTerm(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className="sm:w-80 bg-white dark:bg-gray-200 shadow-sm px-3 mx-4 sm:px-5 py-1 sm:py-2 rounded-full flex items-center">
      <input
        type="text"
        className="w-full outline-none bg-transparent text-black dark:text-gray-700 "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {searchTerm ? (
        <button type="button" className="w-8" onClick={() => setSearchTerm("")}>
          <img
            src={closeIcon}
            alt="searchIcon"
            className="w-full blue dark:blue-dark cursor-pointer"
          />
        </button>
      ) : (
        <button type="button" className="w-8">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="w-full blue dark:blue-dark"
          />
        </button>
      )}
    </div>
  );
};

export default Search;
