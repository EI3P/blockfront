import React from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

export default class AddressSummary extends React.Component {
  render() {
    const { address, isContract } = this.props;
    const web3 = new Web3();

    return (
      <div>
        <b>{isContract ? 'Contract' : 'Account'}</b>
        <p>Hash: <Link to={`/address/${address.addressId}`}>{address.addressId}</Link></p>
        <p>Balance: {web3.utils.fromWei(address.balance)} ETH</p>
        <p>Transactions Count: {address.transactionCount}</p>
      </div>
    );
  }
}
