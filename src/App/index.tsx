import React, { useCallback, useState } from "react";

import Footer from "../Footer";
import Header from "../Header";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

import classNames from "./index.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLogined, setIsLogined] = useState(false);

  const handleLoginSuccess = useCallback(() => setIsLogined(true), []);
  const handleLogout = useCallback(() => setIsLogined(false), []);

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
      <Footer count={count} handleCount={() => setCount((o) => o + 1)} />
    </>
  );
}

export default App;
