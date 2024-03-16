import Square from "./Square";

/* eslint-disable react/prop-types */
const Board = ({ guess, ans, currRow }) => {
  
  return (
    <div className="board">
      <h2 className='title'>Wordle Reimagined</h2>
      <div className="word-row">
          <Square guess={guess} row={0} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={0} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={0} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={0} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={0} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={0} col={5} ans={ans} currRow={currRow}/>
      </div>
      <div className="word-row">
          <Square guess={guess} row={1} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={1} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={1} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={1} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={1} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={1} col={5} ans={ans} currRow={currRow}/>
      </div>
      <div className="word-row">
          <Square guess={guess} row={2} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={2} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={2} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={2} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={2} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={2} col={5} ans={ans} currRow={currRow}/>
      </div>
      <div className="word-row">
          <Square guess={guess} row={3} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={3} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={3} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={3} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={3} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={3} col={5} ans={ans} currRow={currRow}/>
      </div>
      <div className="word-row">
          <Square guess={guess} row={4} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={4} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={4} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={4} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={4} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={4} col={5} ans={ans} currRow={currRow}/>
      </div>
      <div className="word-row">
          <Square guess={guess} row={5} col={0} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={5} col={1} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={5} col={2} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={5} col={3} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={5} col={4} ans={ans} currRow={currRow}/>
          <Square guess={guess} row={5} col={5} ans={ans} currRow={currRow}/>
      </div>
    </div>
  );
}
 
export default Board;

