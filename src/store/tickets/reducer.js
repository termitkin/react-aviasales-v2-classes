import { ACTION_TICKETS_HAS_ERRORED } from "../../constants";
import { ACTION_TICKETS_IS_LOADING } from "../../constants";
import { ACTION_TICKETS_FETCH_DATA_SUCCESS } from "../../constants";

const initialState = {
  tickets: [],
};

export const ticketsHasErrored = (state = false, action) => {
  switch (action.type) {
    case ACTION_TICKETS_HAS_ERRORED:
      return action.ticketsHasErrored;

    default:
      return state;
  }
};

export const ticketsIsLoading = (state = false, action) => {
  switch (action.type) {
    case ACTION_TICKETS_IS_LOADING:
      return action.ticketsIsLoading;

    default:
      return state;
  }
};

export const tickets = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TICKETS_FETCH_DATA_SUCCESS:
      return action.tickets;

    default:
      return state;
  }
};
