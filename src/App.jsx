import Board from './Board';
import { useEffect, useState } from 'react';
import fiveWords from '../data/five-letter-words.json';

const words = fiveWords.map(word => word.toLowerCase());

const App = () => {
  const [history, setHistory] = useState([]);
  const [guess, setGuess] = useState(Array(5).fill(null));
  const [attempts, setAttempts] = useState(0);
  const [currCol, setCurrCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [ans] = useState(words[Math.floor(Math.random() * words.length)]);
  console.log(ans);

  if (gameOver) console.log("Game Over");
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameOver) {
        if (e.key === 'Backspace' && currCol >= 0) {
          const newGuess = [...guess];
          newGuess[currCol-1] = null;
          setCurrCol(Math.max(currCol - 1, 0));
          setGuess(newGuess);
        }
  
        if (e.key === 'Enter' && currCol >= 5) {
          if (words.includes(guess.join(''))) {
            e.preventDefault();
            setGuess(Array(5).fill(null));
            setHistory([...history, guess]);
            setAttempts(attempts + 1);
            setCurrCol(0);
            if (guess.join('') === ans) {
              setGameOver(true);
              return;
            }
          } else {
            alert("Not a word!");
          }
        }
  
        if (e.key.length === 1 && e.key.match(/[a-z]/i) && currCol <= 4) {
          const newGuess = [...guess];
          newGuess[currCol] = e.key;
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
  }, [guess, currCol, gameOver, ans, history, attempts]);

  return (
    <>
      <Board history={history} guess={guess} ans={ans} gameOver={gameOver} />
      
      <p className="message">Attempts: {attempts}</p>
      {gameOver && <p className="message">Congratulations!</p>}
    </>
  );
}
 
export default App;