import './css/App.css';
import React, { useState } from 'react';

function App() {
  const [cellStates] = useState([
    [true, true, false, true, true, false, true, true, false, true], 
    [false, true, true, true, true, false, true, true, false, false], 
    [false, false, false, true, true, false, true, true, false, true]]);
  return (
    <div className="App">
      <div className="lifeGame">
        <header className="header">
          <ul className="nav">
            <li className="listItem">
              <button className="start">
                <i className="fas fa-play"></i>
              </button>
            </li>
          </ul>
        </header>
        <div className="board">
          {cellStates.map(cells => cells.map(cell => {
            if (cell) {
              return <div className="cell alive"></div>;
            } else {
              return <div className="cell dead"></div>;
            }
          }))}
        </div>
      </div>
    </div>
  );
}

export default App;
