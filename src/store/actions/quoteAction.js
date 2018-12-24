import * as actionType from "./actionType";
import axios from "axios";

const send_quote = (quote, author) => {
  return {
    type: actionType.GENERATE_QUOTE,
    quote,
    author
  };
};

const generate_quote = () => {
  return async dispatch => {
    const data = await axios.get("https://favqs.com/api/qotd");
    const quote = await data.data.quote.body;
    const author = await data.data.quote.author;
    await dispatch(send_quote(quote, author));
  };
};

export default generate_quote;
