import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import quotesReducer from "./quotesReducer";
export default combineReducers({
    colorReducer,
    quotesReducer
})