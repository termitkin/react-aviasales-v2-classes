import { ACTION_CHANGE_CURRENCY } from "../../constants";

const initialState = {
  currentCurrency: "rub",
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };
    default:
      return state;
  }
};
