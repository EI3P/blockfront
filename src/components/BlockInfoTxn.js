import React from "react";
import { Link } from "react-router-dom";

export default class BlockInfoTxn extends React.Component {
  render() {
    const { txnInfo } = this.props;

    return (
      <div>
        <p>Transaction: <Link to={`/tx/${txnInfo.hash}`}>{txnInfo.hash}</Link></p>
        <p>From: <Link to={`/address/${txnInfo.from}`}>{txnInfo.from}</Link></p>
        <p>To: <Link to={`/address/${txnInfo.to}`}>{txnInfo.to}</Link></p>
        <p>Value: {txnInfo.value}</p>
      </div>
    );
  }
}
