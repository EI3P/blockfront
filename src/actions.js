export const SET_TRANSACTION = "SET_TRANSACTION";
export const REQUEST_TRANSACTION = "REQUEST_TRANSACTION";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export function setTransaction(id) {
  return {
    type: SET_TRANSACTION,
    id
  };
}
