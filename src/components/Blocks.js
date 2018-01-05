import qs from "qs";
import React from "react";
import { connect } from "react-redux";
import BlockList from "./BlockList";
import { fetchPageOfBlocks } from "../actions";
import store from "../store";

class Blocks extends React.Component {

  componentDidMount() {
    store.dispatch(fetchPageOfBlocks(this.getPageNumber()));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      store.dispatch(fetchPageOfBlocks(this.getPageNumber()));
    }
  }

  // FIXME : Mix me in
  getPageNumber() {
    const queryString = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    return queryString.page || 0;
  }

  renderBlocksToFetch(blocks) {
    const blockNumbers = (
      blocks
        .filter(b => b.blockIsFetching)
        .map(b => `#${b.blockNumber}`)
        .join(', ')
    );
    return <i>Fetching {blockNumbers}</i>
  }

  render() {
    const { blocksAreFetching, blocks } = this.props;
    return (
      <div>
        <div>
          { blocksAreFetching && this.renderBlocksToFetch(blocks) }
          <BlockList blocks={blocks} />
        </div>
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
