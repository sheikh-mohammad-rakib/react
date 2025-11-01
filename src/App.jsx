import { useState } from "react";
import Profile from "./Profile.jsx";
import "./App.css";

export default function MyApp() {
  const [sharedCount, setSharedCount] = useState(0);

  function handleSharedClick() {
    setSharedCount(sharedCount + 1);
  }

  return (
    <div className="app-container">
      <h1>React Learning Examples</h1>
      
      <div className="section">
        <h2>Individual State Management</h2>
        <p>Each counter maintains its own state independently</p>
        <div className="counter-container">
          <MyButton />
          <MyButton />
        </div>
      </div>

      <div className="section">
        <h2>Shared State Management</h2>
        <p>These counters share the same state (count: {sharedCount})</p>
        <div className="counter-container">
          <SharedButton count={sharedCount} onClick={handleSharedClick} />
          <SharedButton count={sharedCount} onClick={handleSharedClick} />
        </div>
      </div>

      <div className="section">
        <h2>Component with Props</h2>
        <p>Displaying data passed through props</p>
        <Profile />
      </div>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function SharedButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
