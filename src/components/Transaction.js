import React from "react";
import { connect } from "react-redux";
import Web3 from "web3";
import TransactionInfo from "./TransactionInfo";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://pub-node1.etherscan.io:8545")
    );
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
