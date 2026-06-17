import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
