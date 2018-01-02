import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { REQUEST_TRANSACTION, RECEIVE_TRANSACTION } from "../actions";

// transaction data

function transactions(state = { isFetching: true }, action) {
  switch (action.type) {
    case REQUEST_TRANSACTION:
      return { ...state, isFetching: true };
    case RECEIVE_TRANSACTION:
      return { ...state, isFetching: false, transaction: action.transaction };
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  transactions
});
