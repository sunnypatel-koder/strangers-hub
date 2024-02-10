import React, { useState } from "react";

const SearchBar = ({ handleSearchByUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleReset = () => {
    document.getElementById("simple-search").value = "";
  };

  const handleSearch = () => {
    handleSearchByUser(searchTerm);

    document.getElementById("simple-search").value = "";
  };

  return (
    <div class="flex items-center mx-10 my-14">
      <label for="simple-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div
          onClick={() => handleReset()}
          class="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer"
        >
          <svg
            width="20x"
            height="20px"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="matrix(0 1 1 0 2.5 2.5)"
            >
              <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />

              <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
            </g>
          </svg>
        </div>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 outline-none"
          placeholder="Search by name..."
          required
        />
      </div>
      <button
        onClick={handleSearch}
        class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-700  outline-none"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
