"use client";

import SelectedCategoryContext from "./SelectedCategoryContext";
import { useState } from "react";

export default function SelectedCategoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [category, setCategory] = useState<Category>({
    name: "New",
    icon: <></>,
  });

  return (
    <SelectedCategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </SelectedCategoryContext.Provider>
  );
}
