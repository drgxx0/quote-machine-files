import React from "react";

import Quotes from "Components/box/quotes/quotes";
import Manager from "Components/box/manager/manager";

import "./box.css";

const Box = ({ generate, author, quote, color, changeColor }) => {
  return (
    <div id="quote-box" className="box">
      <Quotes author={author} quote={quote} color={color} />
      <Manager quote={quote} author={author} generate={generate} color={color} changeColor={changeColor} />
    </div>
  );
};

export default Box;
