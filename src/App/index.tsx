import React from "react";

import Footer from "../Footer";
import Header from "../Header";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

import classNames from "./index.module.css";

function App() {
  console.log("Rendering application (before state declaration)...");

  let count = 0;
  let isLogined = false;

  const handleLoginSuccess = () => {
    console.log("user is logged in");
    isLogined = true;
  };
  const handleLogout = () => {
    console.log("user is logged out");
    isLogined = false;
    count++;
  };

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
