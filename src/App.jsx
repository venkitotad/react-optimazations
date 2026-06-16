import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    name: "Venki",
    role: "Student",
    notifications: 3,
  });

  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);

  console.log("App rendered");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const increaseNotifications = () => {
    setUser({
      ...user,
      notifications: user.notifications + 1,
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "Arial",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>React Performance Challenge</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <button onClick={toggleTheme} style={{ marginLeft: 10 }}>
        Toggle Theme
      </button>

      <button
        onClick={increaseNotifications}
        style={{ marginLeft: 10 }}
      >
        Add Notification
      </button>

      <Dashboard
        user={user}
        theme={theme}
        increaseNotifications={increaseNotifications}
      />
    </div>
  );
}

function Dashboard({ user, theme, increaseNotifications }) {
  console.log("Dashboard rendered");

  return (
    <div style={box}>
      <h2>Dashboard</h2>

      <Sidebar
        user={user}
        theme={theme}
        increaseNotifications={increaseNotifications}
      />
    </div>
  );
}

function Sidebar({ user, theme, increaseNotifications }) {
  console.log("Sidebar rendered");

  return (
    <div style={box}>
      <h3>Sidebar</h3>

      <Profile
        user={user}
        theme={theme}
        increaseNotifications={increaseNotifications}
      />
    </div>
  );
}

function Profile({ user, theme, increaseNotifications }) {
  console.log("Profile rendered");

  return (
    <div style={box}>
      <h3>Profile</h3>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Theme: {theme}</p>
      <p>Notifications: {user.notifications}</p>

      <button onClick={increaseNotifications}>
        Increase Notifications
      </button>
    </div>
  );
}

const box = {
  border: "1px solid gray",
  padding: "16px",
  marginTop: "16px",
  borderRadius: "8px",
};