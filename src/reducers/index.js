import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  SET_TRANSACTION,
  REQUEST_TRANSACTION,
  RECEIVE_TRANSACTION
} from "../actions";

// tx route

function tx(state = {}, action) {
  switch (action.type) {
    case SET_TRANSACTION:
      return { ...state };
    default:
      return state;
  }
}

// transaction data

function transactions(state = { isFetching: false }, action) {
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
  tx,
  transactions
});
