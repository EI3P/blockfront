import React from "react";
import Web3 from "web3";

import BlockInfo from "./BlockInfo"

export default class Block extends React.Component {
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
    web3.eth.getBlock(this.props.blockNumber).then(block => {
      this.setState({
        blockInfo: block,
        loading: false
      });
    });
  }

  render() {
    const { loading, blockInfo } = this.state;

    return (
      <div>
        <div>{loading ? <p>Loading...</p> : <BlockInfo blockInfo={blockInfo} />}</div>
      </div>
    );
  }
}
