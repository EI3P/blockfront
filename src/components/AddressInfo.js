import React from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

// We want something like `BlockInfoTxn` here for each inbound/outbound txn
export default class AddressInfo extends React.Component {
  render() {
    const { addressInfo } = this.props;
    const web3 = new Web3();

    return (
      <div>
        <p>Address hash: {addressInfo.id}</p>
        <p>Address balance: {web3.utils.fromWei(addressInfo.balance)} ETH</p>
        <p>Address code: {addressInfo.code}</p>
        <p>Transactions:</p>
        <ul>
          {addressInfo.transactions.map((tx) => <li><Link to={`/tx/${tx.transactionHash}`}>{tx.transactionHash}</Link></li>)}
        </ul>
      </div>
    );
  }
}
