import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Web3 from "web3";

const AddressSummary = ({ address, isContract }) => {
  const web3 = new Web3();
  return (
    <div>
      <b>{isContract ? 'Contract' : 'Account'}</b>
      <p>Hash: <Link to={`/address/${address.addressId}`}>{address.addressId}</Link></p>
      <p>Balance: {web3.utils.fromWei(address.balance)} ETH</p>
      <p>Transactions Count: {address.transactionCount}</p>
    </div>
  );
};

AddressSummary.propTypes = {
  address: PropTypes.object,
  isContract: PropTypes.bool,
};

export default AddressSummary;
