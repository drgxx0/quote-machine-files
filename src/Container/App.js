import React, { useEffect } from "react";
import { connect } from "react-redux";
import generate_quote from "store/actions/quoteAction";
import change_color from "store/actions/UIAction";

import Box from "Components/box/box";

import "./App.css";

const App = ({ generate, author, quote, color, changeColor }) => {
  useEffect(() => {
    generate();
  }, []);
  useEffect(() => {
    changeColor();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: `rgb(${color})` }}>
      <Box
        generate={generate}
        author={author}
        quote={quote}
        color={color}
        changeColor={changeColor}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote.quote,
    author: state.quote.author,
    color: state.color.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generate: () => dispatch(generate_quote()),
    changeColor: () => dispatch(change_color())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
