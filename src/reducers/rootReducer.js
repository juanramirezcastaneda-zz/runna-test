import { combineReducers } from "redux";
import fetchServerReducer from "./fetchServerReducer";
import berryReducer from "./berryReducer";
export default combineReducers({
  fetchServerReducer,
  berryReducer
});
