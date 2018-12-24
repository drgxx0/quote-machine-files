import React from "react";

import "./manager.css";

const Manager = ({ generate, color, changeColor, quote, author }) => {
  const handleClick = () => {
    generate();
    changeColor();
  };

  return (
    <div className="manager">
      <div className="social" style={{ color: `rgb(${color})` }}>
        <a id="tweet-quote" style={{color: 'inherit'}} href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}><i className="fab fa-twitter fa-2x" style={{ marginRight: "10px" }} /></a>
      </div>
      <div className="buttonBox">
        <div
          id="new-quote"
          style={{ color: "white", background: `rgb(${color})` }}
          className="button"
          onClick={handleClick}
        >
          New Quote
        </div>
      </div>
    </div>
  );
};

export default Manager;
