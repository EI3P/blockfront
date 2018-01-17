import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTransactionsForBlock } from "../actions";
import store from "../store";
import TransactionsTable from "./TransactionsTable";

class Transactions extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTransactionsForBlock("latest"));
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.currentNode !== nextProps.currentNode) {
      store.dispatch(fetchTransactionsForBlock("latest"))
    }
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

Transactions.propTypes = {
  txsAreFetching: PropTypes.bool,
  transactions: PropTypes.array,
  currentNode: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    txsAreFetching: state.transactions.txsAreFetching,
    transactions: state.transactions.transactions,
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(Transactions);
