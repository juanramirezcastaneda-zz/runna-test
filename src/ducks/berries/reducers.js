import { combineReducers } from "redux";
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
      return {
        ...state,
        loading: true
      };
    case types.LOAD_END_BERRIES:
      return {
        ...state,
        loading: false,
        berries: action.berries
      };
    case types.CHANGE_BERRY_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};

const berriesReducer = combineReducers({
  berries
});

export default berriesReducer;
