import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  REQUEST_TRANSACTION,
  RECEIVE_TRANSACTION,
  REQUEST_TRANSACTIONS_FOR_BLOCK,
  RECEIVE_TRANSACTIONS_FOR_BLOCK,
  CLEAR_SEARCH_QUERY,
  UPDATE_SEARCH_QUERY,
  INVALID_SEARCH_QUERY,
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

function search(state={ query: "", validQuery: true}, action) {
  switch(action.type) {
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
        validQuery: true
      }
    case CLEAR_SEARCH_QUERY:
      return {
        ...state,
        query: "",
        validQuery: true
      }
    case INVALID_SEARCH_QUERY:
      return {
        ...state,
        validQuery: false
      }
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  transactions,
  search
});
