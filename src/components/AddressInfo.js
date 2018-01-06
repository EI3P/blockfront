import React from "react";
import Web3 from "web3";

// We want something like `BlockInfoTxn` here for each inbound/outbound txn
export default class AddressInfo extends React.Component {
  render() {
    const { address } = this.props;
    const web3 = new Web3();

    return (
      <div>
        <p>Address hash: {address.addressId}</p>
        <p>Address balance: {web3.utils.fromWei(address.balance)} ETH</p>
        <p>Address code: {address.code}</p>
      </div>
    );
  }
}
