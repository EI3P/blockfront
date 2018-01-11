import React from "react";
import PropTypes from "prop-types";
import Web3 from "web3";

const AddressInfo = ({ address, isContract }) => {
  const web3 = new Web3();
  return (
    <div>
      <b>{isContract ? 'Contract' : 'Account'}</b>
      <p>Hash: {address.addressId}</p>
      <p>Balance: {web3.utils.fromWei(address.balance)} ETH</p>
      {isContract && <p>Address code: {address.code}</p>}
    </div>
  );
};

AddressInfo.propTypes = {
  address: PropTypes.string,
  isContract: PropTypes.bool,
};

export default AddressInfo;
