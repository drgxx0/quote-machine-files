import * as actionType from "./actionType";

const change_color = () => {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256);
    rgb = [...rgb, r];
  }

  return {
    type: actionType.GENERATE_COLOR,
    rgb
  };
};

export default change_color;
