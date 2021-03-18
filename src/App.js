import './css/App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [cellStates, setCellStates] = useState(() => [
    [false, true, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, false],
    [true, true, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ].map(items => items.map(item => {
    return Math.random()*2 > 1;
  })));
  useEffect(() => {
    const interval = setInterval(() => {
      // 次世代の配列は現代を条件でマップしたもの
      const nextStates = cellStates.map((cells, i) => cells.map((cell, j) => {
        // 返す値はcellの状態 true or false
        let livingNeighborCount = 0;
        // 今見ているセルが生きているかを調べる
        if (cell) {
          // 現代のセルの状態を調べる
          // 上のセルが生きているか
          if (i > 0) {
            // 左上のセルが生きているか
            if (j > 0 && cellStates[i - 1][j - 1]) {
              livingNeighborCount++;
            }
            // 上中央のセルが生きているか
            if (cellStates[i - 1][j]) {
              livingNeighborCount++;
            }
            // 右上のセルが生きているか
            if (j < cells.length && cellStates[i - 1][j + 1]) {
              livingNeighborCount++;
            }
          }
          // 右のセルが生きているか
          if (j < cells.length) {
            if (cellStates[i][j + 1]) {
              livingNeighborCount++;
            }
          }
          // 左のセルが生きているか
          if (j > 0) {
            if (cellStates[i][j - 1]) {
              livingNeighborCount++;
            }
          }
          // 下のセルが生きているか
          if (i < cellStates.length - 1) {
            // 左上のセルが生きているか
            if (j > 0 && cellStates[i + 1][j - 1]) {
              livingNeighborCount++;
            }
            // した中央のセルが生きているか
            if (cellStates[i + 1][j]) {
              livingNeighborCount++;
            }
            // 右上のセルが生きているか
            if (j < cells.length && cellStates[i + 1][j + 1]) {
              livingNeighborCount++;
            }
          }
          if (livingNeighborCount <= 1) {
            return false;
          } else if (livingNeighborCount === 2 || livingNeighborCount === 3) {
            return true;
          } else if (livingNeighborCount >= 4) {
            return false;
          } 
        } else {
          // 上のセルが生きているか
          if (i > 0) {
            // 左上のセルが生きているか
            if (j > 0 && cellStates[i - 1][j - 1]) {
              livingNeighborCount++;
            }
            // 上中央のセルが生きているか
            if (cellStates[i - 1][j]) {
              livingNeighborCount++;
            }
            // 右上のセルが生きているか
            if (j < cells.length && cellStates[i - 1][j + 1]) {
              livingNeighborCount++;
            }
          }
          // 右のセルが生きているか
          if (j < cells.length) {
            if (cellStates[i][j + 1]) {
              livingNeighborCount++;
            }
          }
          // 左のセルが生きているか
          if (j > 0) {
            if (cellStates[i][j - 1]) {
              livingNeighborCount++;
            }
          }
          // 下のセルが生きているか
          if (i < cellStates.length - 1) {
            // 左上のセルが生きているか
            if (j > 0 && cellStates[i + 1][j - 1]) {
              livingNeighborCount++;
            }
            // した中央のセルが生きているか
            if (cellStates[i + 1][j]) {
              livingNeighborCount++;
            }
            // 右上のセルが生きているか
            if (j <= cells.length && cellStates[i + 1][j + 1]) {
              livingNeighborCount++;
            }
          }
          if(livingNeighborCount === 3) {
            return true;
          } else {
            return false;
          }
        }
      }));
      setCellStates(nextStates);
      console.table(nextStates);
      console.table(cellStates);
    }, 100);
    return () => clearInterval(interval);
  });
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
          {cellStates.map((cells, i) => cells.map((cell, j) => {
            let livingNeighborCount = 0;
            if(cell){
              return <div className="cell alive"></div>
            } else {
              return <div className="cell dead"></div>
            }
          }))}
        </div>
      </div>
    </div>
  );
}

export default App;
