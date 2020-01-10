import { ACTION_TICKETS_HAS_ERRORED } from "../../constants";
import { ACTION_TICKETS_IS_LOADING } from "../../constants";
import { ACTION_TICKETS_FETCH_DATA_SUCCESS } from "../../constants";
import axios from "axios";

export function ticketsHasErrored(bool) {
  return {
    type: ACTION_TICKETS_HAS_ERRORED,
    ticketsHasErrored: bool,
  };
}

export function ticketsIsLoading(bool) {
  return {
    type: ACTION_TICKETS_IS_LOADING,
    ticketsIsLoading: bool,
  };
}

export function itemsFetchDataSuccess(tickets) {
  return {
    type: ACTION_TICKETS_FETCH_DATA_SUCCESS,
    tickets,
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(ticketsIsLoading(true));

    const getId = url => {
      return axios
        .get(url)
        .then(response => response.data.searchId)
        .catch(() => dispatch(ticketsHasErrored(true)));
    };

    const getTickets = (sID, result) => {
      return axios
        .get("https://front-test.beta.aviasales.ru/tickets", {
          params: {
            searchId: sID,
          },
        })
        .then(response => {
          if (response.data.stop === false) {
            result.push(...response.data.tickets);
            return getTickets(sID, result);
          } else if (response.data.stop === true) {
            result.push(...response.data.tickets);
            return result;
          }
        })
        .catch(error => {
          if (error.response.status === 500) {
            return getTickets(sID, result);
          } else {
            dispatch(ticketsHasErrored(true));
          }
        });
    };

    getId(url).then(currentId => {
      const result = [];
      getTickets(currentId, result).then(result => {
        dispatch(
          itemsFetchDataSuccess({
            tickets: result,
          }),
        );
        dispatch(ticketsIsLoading(false));
      });
    });
  };
}
