import React, { useState } from "react";

import Square from "./square";

const Board = () => {
  const [state, SetState] = useState(Array(9).fill(null));

  const [isXTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 5],
    ];

    for (let logic of winerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    if (state[0] !== null && 
      state[1] !== null && 
      state[2] !== null && 
      state[3] !== null &&
      state[4] !== null &&
      state[5] !== null &&
      state[6] !== null &&
      state[7] !== null &&
      state[8] !== null
    ) {
      const winner = "No one";
      return winner;
    }

    return false;
  };

  const playAgain = () => {
    SetState(Array(9).fill(null));
  }

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    SetState(copyState);
    setXTurn(!isXTurn);
  };

  const isWinner = checkWinner();
  

  return (
    <div className="game">
      <h1>AD Tic-Tac-Toe</h1>
      <div className="board-container">
        {isWinner ? (
          <>
            <h1>"{isWinner}" Won The Game</h1>
            <button onClick={() => playAgain()}>Play Again</button>
          </>
        ) : (
          <>
          <h2>{isXTurn ? "X" : "O"} turn</h2>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
