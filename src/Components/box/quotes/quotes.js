import React from "react";

import "./quotes.css";

const Quotes = ({ quote, author, color }) => {
  return (
    <div className="quotes">
      <p id="text" style={{ color: `rgb(${color})` }}>
        <i className="fas fa-quote-left" /> {quote}
      </p>
      <div id="author" className="author" style={{ color: `rgb(${color})` }}>
        — {author}
      </div>
    </div>
  );
};

export default Quotes;
