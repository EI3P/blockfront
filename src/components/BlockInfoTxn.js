import React from "react";

export default class BlockInfoTxn extends React.Component {
  render() {
    const { txnInfo } = this.props;

    return (
      <div>
        <p>Hash: {txnInfo.hash}</p>
        <p>From: {txnInfo.from}</p>
        <p>To: {txnInfo.to}</p>
        <p>Value: {txnInfo.value}</p>
      </div>
    );
  }
}
