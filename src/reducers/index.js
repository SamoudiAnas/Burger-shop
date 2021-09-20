import { combineReducers } from "redux";
import FiltersReducer from "./FilterReducer";
import BurgersReducer from "./BurgersReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  FiltersReducer,
  BurgersReducer,
  CartReducer,
});
