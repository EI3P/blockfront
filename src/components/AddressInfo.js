import React from "react";
import Web3 from "web3";

// We want something like `BlockInfoTxn` here for each inbound/outbound txn
export default class AddressInfo extends React.Component {
  render() {
    const { address, isContract } = this.props;
    const web3 = new Web3();

    return (
      <div>
        <b>{isContract ? 'Contract' : 'Account'}</b>
        <p>Hash: {address.addressId}</p>
        <p>Balance: {web3.utils.fromWei(address.balance)} ETH</p>
        {isContract && <p>Address code: {address.code}</p>}
      </div>
    );
  }
}
