import React from "react";

// We want something like `BlockInfoTxn` here for each inbound/outbound txn
export default class AddressInfo extends React.Component {
  render() {
    const { addressInfo } = this.props;

    return (
      <div>
        <p>Address hash: {addressInfo.id}</p>
        <p>Address balance: {addressInfo.balance}</p>
        <p>Address transaction count: {addressInfo.txCount}</p>
        <p>Address code: {addressInfo.code}</p>
      </div>
    );
  }
}
