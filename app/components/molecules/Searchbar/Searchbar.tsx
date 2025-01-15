import React, { useState } from "react";
import { Input } from "../../atomes/Input";
import { CiSearch } from "react-icons/ci";
import { Textbox } from "../../atomes/Textbox";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log("Search query:", e.target.value);
  };

  return (
    <div className="flex items-center space-x-4 relative w-full">
      <Textbox size="large" variant="accent" onChange={handleSearch} />
      <button
        type="submit"
        className="absolute left-0 top-2"
        onClick={() => console.log("Searching for:", query)}
      >
        <CiSearch className="text-platinum text-2xl " />
      </button>
    </div>
  );
};
