import React from "react";
import { connect } from "react-redux";
import BlockList from "./BlockList";
import { fetchPageOfBlocks } from "../actions";
import config from "../config";
import store from "../store";

class Blocks extends React.Component {

  componentDidMount() {
    const { pageNumber } = this.props.page;
    store.dispatch(fetchPageOfBlocks(pageNumber));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      store.dispatch(fetchBlock(nextProps.page));
    }
  }

  render() {
    const { blocks, loading } = this.state;
    return (
      <div>
        <div>{loading ? <p>Loading...</p> : <BlockList blocks={blocks} />}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blocksAreFetching: state.blocks.blocksAreFetching,
    blocks: state.blocks.pageOfBlocks
  };
};

export default connect(mapStateToProps, null)(Blocks);
