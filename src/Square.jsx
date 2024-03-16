/* eslint-disable react/prop-types */
const Square = ({ guess, row, col, ans, currRow }) => {
  const char = guess[row][col];

  const prop = {
    submit: row < currRow,
    empty: !char,
    character: ans.includes(char),
    position: char === ans[col]
  }

  if (!prop.submit) {
    return <div className="square draft">{ guess[row][col] || "" }</div>;
  }

  if (prop.empty) {
    return <div className="square empty">{ guess[row][col] || "" }</div>;
  }

  if (prop.character && !prop.position) {
    return <div className="square charMatch">{ guess[row][col] || "" }</div>;
  }
  if (prop.position) {
    return <div className="square posMatch">{ guess[row][col] || "" }</div>;
  }
  return <div className="square wrong">{ guess[row][col] || "" }</div>;
}

export default Square;