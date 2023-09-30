"use client";

import { createContext } from "react";

const SelectedCategoryContext = createContext<SelectedCategoryContextInterface|null>(null);

export default SelectedCategoryContext;