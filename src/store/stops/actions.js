import { ACTION_CHANGE_STOPS } from "../../constants";

export const changeStops = props => {
  return {
    type: ACTION_CHANGE_STOPS,
    payload: props,
  };
};
