import { ACTION_FASTER_OR_CHEAPER } from "../../constants";

const initialState = {
  sortBy: "cheaper",
};

export const fastesOrCheaperReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FASTER_OR_CHEAPER:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
