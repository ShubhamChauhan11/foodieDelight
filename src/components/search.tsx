import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ setSearchResult, data }) {
  const [search, setSearch] = useState("");

  function searchRestaurant(value) {
    setSearch(value);
    let searchResult = data.filter((ele) =>
      ele.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(searchResult);
  }

  return (
    <div className="relative flex items-center">
      <AiOutlineSearch className="text-gray-500 absolute top-3 left-2 w-5 h-5 " />
      <input
        type="text"
        placeholder="Search Restaurant"
        value={search}
        className="bg-gray-300 text-black h-10 rounded-md w-80 pl-10 pr-8"
        onChange={(e) => searchRestaurant(e.target.value)}
      />
      {search && (
        <IoCloseSharp
          onClick={() => {
            setSearch("");
            setSearchResult(null);
          }}
          className="text-gray-500 absolute top-3 right-2 w-5 h-5 bg-gray-300 text-center rounded-md cursor-pointer"
        />
      )}
    </div>
  );
}

export default Search;
