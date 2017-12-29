import React from "react";
import { connect } from "react-redux";
import TransactionInfo from "./TransactionInfo";
import { setTransaction } from "../actions";
import store from "../store";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    store.dispatch(setTransaction(this.props.txId));
  }

  render() {
    const { txId, txInfo, txLoading } = this.props;

    return (
      <div>
        <p>Transaction ID: {txId}</p>
        {txLoading ? <p>Loading...</p> : <TransactionInfo info={txInfo} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    txId: ownProps.match.params.txId,
    txInfo: state.transaction,
    txLoading: state.transactionLoading
  };
};

export default connect(mapStateToProps, null)(Transaction);
