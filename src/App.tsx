import React from 'react';
import JokePreview from './components/JokePreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <div className="AppHeader-wrapper">
          Chuck Norris Jokes finder | &nbsp;
          <input type="text" placeholder="Search joke ..." />
          <button className="AppHeader-find">Find</button>
        </div>
      </header>
      <JokePreview />
    </div>
  );
}

export default App;
