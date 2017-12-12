import React from "react";
import { connect } from "react-redux";
import Web3 from "web3";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://node.blockfront.io:8545")
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
        <div>{loading ? <p>Loading...</p> : <p>From: {txInfo.from}</p>}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { txId: ownProps.match.params.txId };
};

export default connect(mapStateToProps, null)(Transaction);
