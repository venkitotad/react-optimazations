import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "Venki",
    role: "Student",
    notifications: 3,
  });

  const increaseNotifications = () => {
    setUser((prevUser) => ({
      ...prevUser,
      notifications: prevUser.notifications + 1,
    }));
  };

  return (
    <UserContext.Provider value={{ user, increaseNotifications }}>
      {children}
    </UserContext.Provider>
  );
}
