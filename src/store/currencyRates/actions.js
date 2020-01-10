import { ACTION_CURRENCY_RATES_HAS_ERRORED } from "../../constants";
import { ACTION_CURRENCY_RATES_IS_LOADING } from "../../constants";
import { ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS } from "../../constants";
import axios from "axios";

export const currencyRatesHasErrored = bool => {
  return {
    type: ACTION_CURRENCY_RATES_HAS_ERRORED,
    currencyRatesHasErrored: bool,
  };
};

export const currencyRatesIsLoading = bool => {
  return {
    type: ACTION_CURRENCY_RATES_IS_LOADING,
    currencyRatesIsLoading: bool,
  };
};

export const itemsFetchDataSuccess = currencyRates => {
  return {
    type: ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS,
    currencyRates,
  };
};

export const fetchCurrentRates = () => {
  return dispatch => {
    dispatch(currencyRatesIsLoading(true));

    const USD_RUB = axios
      .get("https://api.ratesapi.io/api/latest?base=USD&symbols=RUB")
      .then(data => data.data.rates.RUB)
      .catch(() => dispatch(currencyRatesHasErrored(true)));

    const EUR_RUB = axios
      .get("https://api.ratesapi.io/api/latest?base=EUR&symbols=RUB")
      .then(data => data.data.rates.RUB)
      .catch(() => dispatch(currencyRatesHasErrored(true)));

    axios.all([USD_RUB, EUR_RUB]).then(
      axios.spread((usd_rub, eur_rub) => {
        dispatch(
          itemsFetchDataSuccess({
            currencyRates: {
              usd: usd_rub,
              eur: eur_rub,
            },
          }),
        );
        dispatch(currencyRatesIsLoading(false));
      }),
    );
  };
};
