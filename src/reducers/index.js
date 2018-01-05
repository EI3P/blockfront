import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  REQUEST_TRANSACTION,
  RECEIVE_TRANSACTION,
  REQUEST_TRANSACTIONS_FOR_BLOCK,
  RECEIVE_TRANSACTIONS_FOR_BLOCK,
  REQUEST_BLOCK,
  RECEIVE_BLOCK,
  REQUEST_PAGE_OF_BLOCKS,
  RECEIVE_PAGE_OF_BLOCKS,
  RECEIVE_BLOCK_IN_PAGE,
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

// blocks data
function blocks(
  state = {
    blockIsFetching: true,
    blocksAreFetching: true,
    block: null,
    pageOfBlocks: null
  },
  action
) {
  switch (action.type) {
    case REQUEST_BLOCK:
      return { ...state, blockIsFetching: true };
    case RECEIVE_BLOCK:
      return { ...state, blockIsFetching: false, block: action.block };
    case REQUEST_PAGE_OF_BLOCKS:
      return {
        ...state,
        blocksAreFetching: true,
        pageOfBlocks: action.blockNumbers.map((blockNumber) => {
          return { blockNumber, blockIsFetching: true, block: null }
        })
      };
    case RECEIVE_PAGE_OF_BLOCKS:
      return { ...state, blocksAreFetching: false };
    case RECEIVE_BLOCK_IN_PAGE:
      const blockIndex = state.pageOfBlocks.findIndex(block => {
        return block.blockNumber == action.blockNumber
      });
      return {
        ...state,
        pageOfBlocks: [
          state.pageOfBlocks.slice(0, blockIndex),
          { blockNumber, blockIsFetching: false, block: action.block },
          state.pageOfBlocks.slice(blockIndex + 1)
        ]
      };
    default:
      return state;
  }
}

// site search

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
  blocks,
  transactions,
  search
});
