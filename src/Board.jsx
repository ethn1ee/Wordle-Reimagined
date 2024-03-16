import Square from "./Square";

/* eslint-disable react/prop-types */
const Board = ({ history, guess, ans, gameOver }) => {
  return (
    <div className="board">
      <h2 className='title'>Wordle Reimagined</h2>
      {history.map((word, row) => (
        <div className="word-row" key={row}>
          <Square char={word[0]} charMatch={ans.includes(word[0])} posMatch={ans[0]===word[0]} isCurrent={false}/>
          <Square char={word[1]} charMatch={ans.includes(word[1])} posMatch={ans[1]===word[1]} isCurrent={false}/>
          <Square char={word[2]} charMatch={ans.includes(word[2])} posMatch={ans[2]===word[2]} isCurrent={false}/>
          <Square char={word[3]} charMatch={ans.includes(word[3])} posMatch={ans[3]===word[3]} isCurrent={false}/>
          <Square char={word[4]} charMatch={ans.includes(word[4])} posMatch={ans[4]===word[4]} isCurrent={false}/>
        </div>
      ))}
      {gameOver || 
        <div className="word-row">
        <Square char={guess[0]} charMatch={ans.includes(guess[0])} posMatch={ans[0]===guess[0]} isCurrent={true}/>
        <Square char={guess[1]} charMatch={ans.includes(guess[1])} posMatch={ans[1]===guess[1]} isCurrent={true}/>
        <Square char={guess[2]} charMatch={ans.includes(guess[2])} posMatch={ans[2]===guess[2]} isCurrent={true}/>
        <Square char={guess[3]} charMatch={ans.includes(guess[3])} posMatch={ans[3]===guess[3]} isCurrent={true}/>
        <Square char={guess[4]} charMatch={ans.includes(guess[4])} posMatch={ans[4]===guess[4]} isCurrent={true}/>
      </div>}
    </div>
  );
}
 
export default Board;

