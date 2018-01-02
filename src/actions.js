import Web3 from "web3";

export const REQUEST_TRANSACTION = "REQUEST_TRANSACTION";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const REQUEST_TRANSACTIONS_FOR_BLOCK = "REQUEST_TRANSACTIONS_FOR_BLOCK";
export const RECEIVE_TRANSACTIONS_FOR_BLOCK = "RECEIVE_TRANSACTIONS_FOR_BLOCK";

// TODO: set this dynamically
const web3 = new Web3(
  new Web3.providers.HttpProvider("http://node.blockfront.io:8545")
);

export function requestTransaction(id) {
  return {
    type: REQUEST_TRANSACTION,
    id
  };
}

export function receiveTransaction(id, transaction) {
  return {
    type: RECEIVE_TRANSACTION,
    id,
    transaction
  };
}

export function fetchTransaction(id) {
  return function(dispatch) {
    dispatch(requestTransaction(id));
    return web3.eth.getTransaction(id).then(tx => {
      dispatch(receiveTransaction(id, tx));
    });
  };
}

export function requestTransactionsForBlock(id = "latest") {
  return {
    type: REQUEST_TRANSACTIONS_FOR_BLOCK,
    id
  };
}

export function receiveTransactionsForBlock(id, transactions) {
  return {
    type: RECEIVE_TRANSACTIONS_FOR_BLOCK,
    id,
    transactions
  };
}

export function fetchTransactionsForBlock(id = "latest") {
  return function(dispatch) {
    dispatch(requestTransactionsForBlock(id));
    return web3.eth.getBlock(id, true).then(block => {
      dispatch(receiveTransactionsForBlock(id, block.transactions));
    });
  };
}
