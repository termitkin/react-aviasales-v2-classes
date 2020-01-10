import { ACTION_CHANGE_CURRENCY } from "../../constants";

export const changeCurrency = props => {
  return {
    type: ACTION_CHANGE_CURRENCY,
    payload: props,
  };
};
