/* eslint-disable react/prop-types */
const Square = ({ char, charMatch, posMatch, isCurrent }) => {

  if (isCurrent) {
    return <div className="square draft">{ char || "" }</div>;
  }

  if (!char) {
    return <div className="square empty">{ "" }</div>;
  }

  if (posMatch) {
    return <div className="square posMatch">{ char || "" }</div>;
  }
  
  if (charMatch) {
    return <div className="square charMatch">{ char || "" }</div>;
  }
  
  return <div className="square wrong">{ char || "" }</div>;
}

export default Square;