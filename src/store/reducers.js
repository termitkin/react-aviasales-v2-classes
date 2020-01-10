import { combineReducers } from "redux";

import { currencyReducer } from "./currency/reducer";
import { fastesOrCheaperReducer } from "./fastesOrCheaper/reducer";
import { stopsReducer } from "./stops/reducer";

import {
  tickets,
  ticketsHasErrored,
  ticketsIsLoading,
} from "./tickets/reducer";

import {
  currencyRates,
  currencyRatesHasErrored,
  currencyRatesIsLoading,
} from "./currencyRates/reducer";

export default combineReducers({
  stops: stopsReducer,
  currency: currencyReducer,
  fastesOrCheaper: fastesOrCheaperReducer,

  currencyRates,
  currencyRatesHasErrored,
  currencyRatesIsLoading,

  tickets,
  ticketsHasErrored,
  ticketsIsLoading,
});
