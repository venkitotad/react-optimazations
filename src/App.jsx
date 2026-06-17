import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [counter, setCounter] = useState(0);

  const { theme } = useContext(ThemeContext);

  console.log("App rendered");

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

      <Dashboard />
    </div>
  );
}

const Dashboard = React.memo(function Dashboard() {
  console.log("Dashboard rendered");

  return (
    <div style={box}>
      <h2>Dashboard</h2>

      <Sidebar />
    </div>
  );
})

const Sidebar = React.memo(function Sidebar() {
  console.log("Sidebar rendered");

  return (
    <div style={box}>
      <h3>Sidebar</h3>

      <Profile />
    </div>
  );
})

const Profile = React.memo(function Profile() {
  console.log("Profile rendered");

  const { user, increaseNotifications } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={box}>
      <h3>Profile</h3>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Theme: {theme}</p>
      <p>Notifications: {user.notifications}</p>

      <button onClick={increaseNotifications}>Increase Notifications</button>
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
})

const box = {
  border: "1px solid gray",
  padding: "16px",
  marginTop: "16px",
  borderRadius: "8px",
};
