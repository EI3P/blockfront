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
  REQUEST_ADDRESS,
  RECEIVE_ADDRESS,
  REQUEST_PAGE_OF_ADDRESS_TRANSACTIONS,
  RECEIVE_PAGE_OF_ADDRESS_TRANSACTIONS,
  REQUEST_PAGE_OF_ADDRESSES,
  RECEIVE_PAGE_OF_ADDRESSES,
  RECEIVE_ADDRESS_IN_PAGE,
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
    transactionReceipt: null,
    transactions: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_TRANSACTION:
      return { ...state, txIsFetching: true };
    case RECEIVE_TRANSACTION:
      return { ...state, txIsFetching: false, transaction: action.transaction, transactionReceipt: action.transactionReceipt };
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
    pageOfBlocks: []
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
        return block.blockNumber === action.blockNumber
      });
      return {
        ...state,
        pageOfBlocks: [
          ...state.pageOfBlocks.slice(0, blockIndex),
          { blockNumber: action.blockNumber, blockIsFetching: false, block: action.block },
          ...state.pageOfBlocks.slice(blockIndex + 1)
        ]
      };
    default:
      return state;
  }
}

// address data
function addresses(
  state = {
    addressIsFetching: true,
    addressesAreFetching: true,
    addressTransactionsAreFetching: true,
    address: null,
    addressTransactions: [],
    pageOfAddresses: [],
    lastAddressId: null,
  },
  action
) {
  switch(action.type) {
    case REQUEST_ADDRESS:
      return {
        ...state,
        addressIsFetching: true,
      };
    case RECEIVE_ADDRESS:
      return {
        ...state,
        addressIsFetching: false,
        address: action.address,
        isContract: action.address.code !== '0x'
      };
    case REQUEST_PAGE_OF_ADDRESS_TRANSACTIONS:
      return {
        ...state,
        addressTransactionsAreFetching: true
      };
    case RECEIVE_PAGE_OF_ADDRESS_TRANSACTIONS:
      return {
        ...state,
        addressTransactionsAreFetching: false,
        addressTransactions: action.addressTransactions
      };
    case REQUEST_PAGE_OF_ADDRESSES:
      return {
        ...state,
        addressesAreFetching: true,
        pageOfAddresses: action.addressIds.map((addressId) => {
          return { addressId, addressIsFetching: true, address: null }
        })
      };
    case RECEIVE_PAGE_OF_ADDRESSES:
      return { ...state, addressesAreFetching: false };
    case RECEIVE_ADDRESS_IN_PAGE:
      const addressIndex = state.pageOfAddresses.findIndex(address => {
        return address.addressId === action.addressId
      });
      return {
        ...state,
        pageOfAddresses: [
          ...state.pageOfAddresses.slice(0, addressIndex),
          { addressId: action.addressId, addressIsFetching: false, address: action.address, isContract: action.address.code !== '0x' },
          ...state.pageOfAddresses.slice(addressIndex + 1)
        ],
        lastAddressId: state.pageOfAddresses[state.pageOfAddresses.length - 1].addressId
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
  addresses,
  blocks,
  transactions,
  search
});
