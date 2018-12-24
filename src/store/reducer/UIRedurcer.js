import * as actionType from "store/actions/actionType";

const initState = {
  color: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GENERATE_COLOR:
      return {
        color: action.rgb
      };
    default:
      return state;
  }
};

export default reducer;
