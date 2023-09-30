"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  function searchQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function searchHandler(
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLLabelElement>
  ) {
    if (event.type === "submit") event.preventDefault();

    if (searchQuery) search();
  }
  function search() {
    router.replace(`/search?q=${searchQuery}`);
  }

  return (
    <div className="search-bar">
      <form
        onSubmit={searchHandler}
        className="border border-gray-300  flex rounded-full items-center"
      >
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-6 focus:ring-black min-w-[24rem] text-lg placeholder-gray-300 bg-black outline-none text-white rounded-full"
          id="search-id"
          onChange={searchQueryHandler}
          value={searchQuery || ""}
        />
        <div className="px-4">
          <label onClick={searchHandler} htmlFor="search-id">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl w-6 h-6 hover:cursor-pointer"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
