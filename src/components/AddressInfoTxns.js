import React from "react";
import { Link } from "react-router-dom";

export default class AddressInfoTxns extends React.Component {
  render() {
    const { addressTransactions } = this.props;

    return (
      <div>
        <p>Transactions:</p>
        <ul>
          {addressTransactions.map((tx) => <li><Link to={`/tx/${tx.transactionHash}`}>{tx.transactionHash}</Link></li>)}
        </ul>
      </div>
    );
  }
}
