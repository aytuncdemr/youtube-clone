"use client";

import FeedBarCategories from "./FeedBarCategories";

export default function FeedBar(){


    return (
      <aside className="feed-bar-aside text-white border-r flex flex-col px-4 border-r-gray-600">
        <FeedBarCategories></FeedBarCategories>
        <footer className="mt-auto">
          <p className="text-center  text-gray-200 text-sm">
            Copyright 2023 Aytunç Demir
          </p>{" "}
        </footer>
      </aside>
    );
}