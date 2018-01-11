import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTransactionsForBlock } from "../actions";
import store from "../store";
import BlockInfoTxn from "./BlockInfoTxn";

class Transactions extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTransactionsForBlock("latest"));
  }

  render() {
    const { transactions, txsAreFetching } = this.props;
    console.log("transactions:", transactions);

    return (
      <div>
        <p>Latest Transactions</p>
        {txsAreFetching ? (
          <p>Loading...</p>
        ) : (
          transactions.map((txnInfo, i) => <BlockInfoTxn txnInfo={txnInfo} />)
        )}
      </div>
    );
  }
}

Transactions.propTypes = {
  txsAreFetching: PropTypes.bool,
  transactions: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    txsAreFetching: state.transactions.txsAreFetching,
    transactions: state.transactions.transactions
  };
};

export default connect(mapStateToProps, null)(Transactions);
