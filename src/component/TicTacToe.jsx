

import React, { useState } from 'react';
import '../component/TicTacToe.css'
const initial_value = Array(9).fill(null);

const calWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

const TicTacToe = () => {
    const [board, setBoard] = useState(initial_value);
    const [player, setPlayer] = useState(true);
  
    const handleClick = (index) => {
      if (calWinner(board) || board[index]) {
        return;
      }
      const Board = [...board];
      Board[index] = player ? '❌' : '⭕';
      setBoard(Board);
      setPlayer(!player);
    };
  
    const resetGame = () => {
      setBoard(initial_value);
      setPlayer(true);
    };
  
    const renderSquare = (index) => {
      return (
        <button className={`square ${board[index] === 'X' ? 'x-active' : 'o-active'}`} onClick={() => handleClick(index)}>
          {board[index]}
        </button>
      );
    };
  
    const winner = calWinner(board);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (board.every(square => square)) {
      status = 'It\'s a draw!';
    } else {
      status = `Players: ${player ? 'Player1' : 'Player2'}`;
    }
  
    return (
      <div>
        <section>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset-button" onClick={resetGame}>Reset</button>
        </section>
      </div>
    );
  };
  
  export default TicTacToe;
  



