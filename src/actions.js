import Web3 from "web3";

// Txns
export const REQUEST_TRANSACTION = "REQUEST_TRANSACTION";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const REQUEST_TRANSACTIONS_FOR_BLOCK = "REQUEST_TRANSACTIONS_FOR_BLOCK";
export const RECEIVE_TRANSACTIONS_FOR_BLOCK = "RECEIVE_TRANSACTIONS_FOR_BLOCK";

// Blocks
export const REQUEST_BLOCK = "REQUEST_BLOCK";
export const RECEIVE_BLOCK = "RECEIVE_BLOCK";
export const REQUEST_PAGE_OF_BLOCKS = "REQUEST_PAGE_OF_BLOCKS";
export const RECEIVE_PAGE_OF_BLOCKS = "RECEIVE_PAGE_OF_BLOCKS";
export const RECEIVE_BLOCK_IN_PAGE = "RECEIVE_BLOCK_IN_PAGE";

// Search
export const CLEAR_SEARCH_QUERY = "CLEAR_SEARCH_QUERY";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";
export const INVALID_SEARCH_QUERY = "INVALID_SEARCH_QUERY";

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

export function fetchBlock(blockNumber) {
  return function (dispatch) {
    dispatch(requestBlock(blockNumber));
    return web3.eth.getBlock(blockNumber, true).then(block => {
      dispatch(receiveBlock(blockNumber, block));
    });
  };
}

export function requestBlock(blockNumber) {
  return {
    type: REQUEST_BLOCK,
    blockNumber
  };
}

export function receiveBlock(blockNumber, block) {
  return {
    type: RECEIVE_BLOCK,
    blockNumber,
    block
  };
}

export function fetchPageOfBlocks(pageNumber) {
  return function (dispatch) {
    return web3.eth.getBlock("latest", false).then(block => {
      const PAGE_SIZE = 5;
      const highBlockNumber = block.number - pageNumber * PAGE_SIZE;

      const pageOfBlockNumbers = Array(PAGE_SIZE).fill(null).map((_, i) => highBlockNumber - i);
      dispatch(requestPageOfBlocks(pageOfBlockNumbers));

      return Promise.all(
        pageOfBlockNumbers.map(blockNumber => {
          return web3.eth.getBlock(String(blockNumber), true).then((blockInPage) => {
            dispatch(receiveBlockInPage(blockNumber, blockInPage));
          });
        })
      ).then(pageOfBlocks => {
        dispatch(receivePageOfBlocks(pageOfBlocks));
      });
    });
  };
}

export function requestPageOfBlocks(blockNumbers) {
  return {
    type: REQUEST_PAGE_OF_BLOCKS,
    blockNumbers,
  };
}

export function receivePageOfBlocks() {
  return {
    type: RECEIVE_PAGE_OF_BLOCKS,
  };
}

export function receiveBlockInPage(blockNumber, block) {
  return {
    type: RECEIVE_BLOCK_IN_PAGE,
    blockNumber,
    block
  };
}

export function clearSearchQuery() {
  return {
    type: CLEAR_SEARCH_QUERY,
  }
}

export function updateSearchQuery(query) {
  return {
    type: UPDATE_SEARCH_QUERY,
    query,
  }
}

export function invalidSearchQuery() {
  return {
    type: INVALID_SEARCH_QUERY,
  }
}
