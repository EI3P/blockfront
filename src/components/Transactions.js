import React from "react";
import { connect } from "react-redux";
import { fetchTransactionsForBlock } from "../actions";
import store from "../store";
import TransactionsTable from "./TransactionsTable";

class Transactions extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTransactionsForBlock("latest"));
  }

  render() {
    const { transactions, txsAreFetching } = this.props;

    return (
      <TransactionsTable
        title="Latest Transactions"
        transactions={transactions}
        loading={txsAreFetching}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    txsAreFetching: state.transactions.txsAreFetching,
    transactions: state.transactions.transactions
  };
};

export default connect(mapStateToProps, null)(Transactions);
