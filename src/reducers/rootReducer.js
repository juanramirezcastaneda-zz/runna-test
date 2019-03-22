import { combineReducers } from "redux";
import * as berryReducers from "../ducks/index";

const rootReducer = combineReducers(berryReducers);
export default rootReducer;
