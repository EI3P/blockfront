import React from "react";
import { connect } from "react-redux";
import Web3 from "web3";
import BlockList from "./BlockList";

class Blocks extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      // FIXME: Set from query param
      // XXX: This should render as `page + 1`
      page: 0,
      pageSize: 5
    };
  }

  componentDidMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://node.blockfront.io:8545")
    );
    web3.eth.getBlock("latest", false).then(block => {
      this.setState({
        latestBlockNumber: block.number
      });
      return block.number;
    }).then((latestBlockNumber) => {
      // FIXME this will be a reducer
      let pageOfBlockNumbers = this.getPageOfBlockNumbers();
      return Promise.all(pageOfBlockNumbers.map((blockNumber) => web3.eth.getBlock(blockNumber, true)))
    }).then(blocks => {
      this.setState({
        blocks: blocks,
        loading: false
      });
    });
  }

  getPageOfBlockNumbers() {
    const { latestBlockNumber, page, pageSize } = this.state;
    const highBlockNumber = latestBlockNumber - (page * pageSize);

    let pageOfBlockNumbers = [];
    let cursor = 0;

    while (cursor < pageSize) {
      pageOfBlockNumbers.push(highBlockNumber - cursor++);
    }

    return pageOfBlockNumbers;
  }

  render() {
    const { blocks, loading } = this.state;
    return (
      <div>
        <div>{loading ? <p>Loading...</p> : <BlockList blocks={blocks} />}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Blocks);
