import { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] =  useState("");
  const [password, setPassword] =  useState("");
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" value={username}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password}></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
