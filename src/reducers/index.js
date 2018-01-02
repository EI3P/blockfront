import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  REQUEST_TRANSACTION,
  RECEIVE_TRANSACTION,
  REQUEST_TRANSACTIONS_FOR_BLOCK,
  RECEIVE_TRANSACTIONS_FOR_BLOCK
} from "../actions";

// transaction data

function transactions(
  state = {
    txIsFetching: true,
    txsAreFetching: true,
    transaction: null,
    transactions: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_TRANSACTION:
      return { ...state, txIsFetching: true };
    case RECEIVE_TRANSACTION:
      return { ...state, txIsFetching: false, transaction: action.transaction };
    case REQUEST_TRANSACTIONS_FOR_BLOCK:
      return { ...state, txsAreFetching: true };
    case RECEIVE_TRANSACTIONS_FOR_BLOCK:
      return {
        ...state,
        txsAreFetching: false,
        transactions: action.transactions
      };
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  transactions
});
