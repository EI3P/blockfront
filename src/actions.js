import Web3 from "web3";

export const REQUEST_TRANSACTION = "REQUEST_TRANSACTION";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

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
    transaction: transaction
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
