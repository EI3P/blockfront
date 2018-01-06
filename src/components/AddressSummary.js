import React from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

export default class AddressSummary extends React.Component {
  render() {
    const { address } = this.props;
    const web3 = new Web3();

    return (
      <div>
        <p>Address: <Link to={`/address/${address.addressId}`}>{address.addressId}</Link></p>
        <p>Balance: {web3.utils.fromWei(address.balance)} ETH</p>
        <p>Transactions Count: {address.transactionCount}</p>
      </div>
    );
  }
}
