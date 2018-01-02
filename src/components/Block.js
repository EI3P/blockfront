import React from "react";
import { connect } from "react-redux";

import BlockInfo from "./BlockInfo";
import config from "../config";

class Block extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { web3 } = config;
    web3.eth.getBlock(this.props.blockNumber, true).then(block => {
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

const mapStateToProps = (state, ownProps) => {
  return { blockNumber: ownProps.match.params.blockNumber };
};

export default connect(mapStateToProps, null)(Block);
