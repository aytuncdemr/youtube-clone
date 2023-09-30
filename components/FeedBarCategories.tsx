"use client";

import SelectedCategoryContext from "@/contexts/SelectedCategoryContext";
import { categories } from "@/utils/constants";
import { useState } from "react";
import { useContext } from "react";

export default function FeedBarCategories() {
  
  const selectedCategoryContext = useContext(SelectedCategoryContext);

  function selectedCategoryHandler(category: string,icon:JSX.Element) {
    selectedCategoryContext?.setCategory({name:category,icon});
  }

  return (
    <div className="feed-bar-categories">
      <ul className="flex flex-col gap-3">
        {categories.map((category: Category, index) => {
          return (
            <li key={index} className="category">
              <button
                onClick={() => selectedCategoryHandler(category.name,category.icon)}
                className={`py-2 text-lg   duration-150 hover:bg-red-600 gap-1 border-2 flex items-center justify-center border-red-600 rounded-xl w-full ${
                  selectedCategoryContext?.category?.name === category.name && "bg-red-600"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
