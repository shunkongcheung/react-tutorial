import { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] =  useState("");
  const [password, setPassword] =  useState("");


  console.log({ username, password });

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      alert(`Hello! Mr. ${username}, I hacked your password, that is ${password}`)
    }}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
      </div>
      {username === "keyword" && (
        <div>surprise! you have provided the correct username!</div>
      )}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
