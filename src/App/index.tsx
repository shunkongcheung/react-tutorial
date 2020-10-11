import React, { useCallback, useState } from "react";

import Footer from "../Footer";
import Header from "../Header";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

import classNames from "./index.module.css";

function App() {
  console.log("Rendering application (before state declaration)...");

  const [count, setCount] = useState(0);
  const [isLogined, setIsLogined] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    console.log("user is logged in");
    setIsLogined(true);
  }, []);
  const handleLogout = useCallback(() => {
    console.log("user is logged out");
    setIsLogined(false);
    setCount((oValue) => oValue + 1);
  }, []);

  console.log("Rendering application (after state declaration)...");
  return (
    <>
      <Header handleLogout={handleLogout} />
      <div className={classNames.container}>
        {isLogined ? (
          <HomePage />
        ) : (
          <LoginPage handleLoginSuccess={handleLoginSuccess} />
        )}
      </div>
      <div className={classNames.quote}>
        Man is born free and everywhere he is in chains. -- Jean-Jacques
        Rousseau
      </div>
      <Footer count={count} />
    </>
  );
}

export default App;
