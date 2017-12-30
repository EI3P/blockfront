import React from "react";
import { connect } from "react-redux";
import TransactionInfo from "./TransactionInfo";
import config from "../config";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { web3 } = config;
    web3.eth.getTransaction(this.props.txId).then(tx => {
      this.setState({
        txInfo: tx,
        loading: false
      });
    });
  }

  render() {
    const { txId } = this.props;
    const { loading, txInfo } = this.state;

    return (
      <div>
        <p>Transaction ID: {txId}</p>
        {loading ? <p>Loading...</p> : <TransactionInfo info={txInfo} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { txId: ownProps.match.params.txId };
};

export default connect(mapStateToProps, null)(Transaction);
