import  { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainContent from "./Components/MainContent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    console.log("Logging in...");
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  console.log("Current login state:", isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ? (
        <MainContent onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;