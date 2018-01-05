import React from "react";
import { connect } from "react-redux";
import TransactionInfo from "./TransactionInfo";
import { fetchTransaction } from "../actions";
import store from "../store";

class Transaction extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTransaction(this.props.txId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      store.dispatch(fetchTransaction(nextProps.txId));
    }
  }

  render() {
    const { txId, txInfo, txFetching } = this.props;

    return (
      <div>
        <p>
          Transaction ID: <b>{txId}</b>
        </p>
        {txFetching ? <p>Loading...</p> : <TransactionInfo info={txInfo} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    txId: ownProps.match.params.txId,
    txInfo: state.transactions.transaction,
    txFetching: state.transactions.txIsFetching
  };
};

export default connect(mapStateToProps, null)(Transaction);
