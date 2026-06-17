import { createContext, useCallback, useMemo, useState } from "react";
import React from "react";
export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  },[]);

  const value = useMemo(() =>{
     return {theme, toggleTheme}
  },[theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}


