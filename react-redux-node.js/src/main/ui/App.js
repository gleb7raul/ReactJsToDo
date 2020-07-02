import React from 'react';
import logo from './images/small.png';
import './style/App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You LifeStyle List.
        </p>
      </header>
      <List />
    </div>
  );
}

export default App;
