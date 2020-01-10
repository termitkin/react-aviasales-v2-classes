import { ACTION_FASTER_OR_CHEAPER } from "../../constants";

export const changeFasterOrCheaper = props => {
  return {
    type: ACTION_FASTER_OR_CHEAPER,
    payload: props,
  };
};
