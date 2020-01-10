import { ACTION_CHANGE_STOPS } from "../../constants";

const initialState = {
  checkbox0: {
    id: 0,
    stops: "all",
    isEnabled: true,
    labelText: "Все",
  },

  checkbox1: {
    id: 1,
    stops: 0,
    isEnabled: true,
    labelText: "Без пересадок",
  },

  checkbox2: {
    id: 2,
    stops: 1,
    isEnabled: true,
    labelText: "1 пересадка",
  },

  checkbox3: {
    id: 3,
    stops: 2,
    isEnabled: true,
    labelText: "2 пересадки",
  },

  checkbox4: {
    id: 4,
    stops: 3,
    isEnabled: true,
    labelText: "3 пересадки",
  },
};

export const stopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_STOPS:
      const newState = JSON.parse(JSON.stringify(state));
      const currentClickedCheckbox = action.payload.currentClickedCheckbox;

      if (action.payload.only === true) {
        for (let i in newState) {
          newState[i].isEnabled = false;
        }
        newState[currentClickedCheckbox].isEnabled = true;
      } else if (
        currentClickedCheckbox === "checkbox0" &&
        state.checkbox0.isEnabled === false
      ) {
        for (let i in newState) {
          newState[i].isEnabled = true;
        }
      } else if (
        currentClickedCheckbox === "checkbox0" &&
        state.checkbox0.isEnabled === true
      ) {
        for (let i in newState) {
          newState[i].isEnabled = false;
        }
      } else if (
        currentClickedCheckbox !== "checkbox0" &&
        state.checkbox0.isEnabled === true
      ) {
        newState.checkbox0 = {
          id: state.checkbox0.id,
          isEnabled: false,
          labelText: state.checkbox0.labelText,
          stops: state.checkbox0.stops,
        };

        newState[currentClickedCheckbox].isEnabled = !state[
          currentClickedCheckbox
        ].isEnabled;
      } else if (
        currentClickedCheckbox !== "checkbox0" &&
        state.checkbox0.isEnabled === false
      ) {
        newState[currentClickedCheckbox].isEnabled = !state[
          currentClickedCheckbox
        ].isEnabled;

        let checkBoxCount = 0;
        let enabledCheckBoxCount = 0;

        for (let i in newState) {
          if (newState[i].isEnabled === true) {
            enabledCheckBoxCount += 1;
          }
          checkBoxCount += 1;
        }

        if (enabledCheckBoxCount === checkBoxCount - 1) {
          newState.checkbox0.isEnabled = true;
        }
      } else {
        newState[currentClickedCheckbox].isEnabled = !state[
          currentClickedCheckbox
        ].isEnabled;
      }
      return newState;

    default:
      return state;
  }
};
