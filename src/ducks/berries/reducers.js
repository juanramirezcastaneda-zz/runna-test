import { combineReducers } from "redux";
import actions from "./actions";
import types from "./types";

const initialState = {
  id: 1,
  loading: false,
  berries: []
};

// Reducer
const berries = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_START_BERRIES:
      return actions.startLoadingBerries();
    case types.LOAD_END_BERRIES:
      return actions.endLoadingBerries(action.berries);
    case types.CHANGE_BERRY_ID:
      return actions.changeBerryId(action.id);
    default:
      return state;
  }
};

const berriesReducer = combineReducers({
  berries
});

export default berriesReducer;
