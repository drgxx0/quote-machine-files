import * as actionType from "store/actions/actionType";

const initState = {
  quote: "",
  author: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GENERATE_QUOTE:
      return {
        quote: action.quote,
        author: action.author
      };
    default:
      return state;
  }
};

export default reducer;
