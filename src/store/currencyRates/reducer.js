import { ACTION_CURRENCY_RATES_HAS_ERRORED } from "../../constants";
import { ACTION_CURRENCY_RATES_IS_LOADING } from "../../constants";
import { ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS } from "../../constants";

const initialState = {
  currencyRates: {
    usd: "",
    eur: "",
  },
};

export const currencyRatesHasErrored = (state = false, action) => {
  switch (action.type) {
    case ACTION_CURRENCY_RATES_HAS_ERRORED:
      return action.currencyRatesHasErrored;

    default:
      return state;
  }
};

export const currencyRatesIsLoading = (state = false, action) => {
  switch (action.type) {
    case ACTION_CURRENCY_RATES_IS_LOADING:
      return action.currencyRatesIsLoading;

    default:
      return state;
  }
};

export const currencyRates = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS:
      return action.currencyRates;

    default:
      return state;
  }
};
