import './App.css';

function App() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password"></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
