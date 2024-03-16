import Board from './Board';
import { useEffect, useState } from 'react';
import words from '../data/six-letter-words.json';

const App = () => {
  const [guess, setGuess] = useState(Array(6).fill(Array(6).fill(null)));
  const [currRow, setCurrRow] = useState(0);
  const [currCol, setCurrCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [ans] = useState(words[Math.floor(Math.random() * words.length)]);
  console.log(ans.toLowerCase());

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameOver) {
        if (currRow > 5) {
          setGameOver(true);
          return;
        }

        if (e.key === 'Backspace' && currCol >= 0) {
          const newGuess = guess.map(word => [...word]);
          newGuess[currRow][currCol] = null;
          setCurrCol(Math.max(currCol - 1, 0));
          setGuess(newGuess);
        }
  
        if (e.key === 'Enter' && currCol >= 6) {
          const input = guess[currRow].join('');
          if (words.includes(input)) {
            e.preventDefault();
            setCurrRow(currRow + 1);
            setCurrCol(0);
            if (input === ans) {
              setGameOver(true);
            }
          } else {
            alert("Not a word!");
          }
        }
        
        if (currCol > 5) return;
  
        if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
          const newGuess = guess.map(word => [...word]);
          newGuess[currRow][currCol] = e.key;
          setGuess(newGuess);
          setCurrCol(currCol + 1);
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [guess, currRow, currCol, gameOver, ans]);

  return (
    <>
      <Board guess={guess} ans={ans} currRow={currRow}/>
    </>
  );
}
 
export default App;