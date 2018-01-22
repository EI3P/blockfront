import qs from "qs";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BlockList from "./BlockList";
import { fetchPageOfBlocks } from "../actions";
import store from "../store";

class Blocks extends React.Component {

  componentDidMount() {
    store.dispatch(fetchPageOfBlocks(this.getPageNumber()));
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.location.pathname !== nextProps.location.pathname) ||
      (this.props.currentNode !== nextProps.currentNode)
    ) {
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

Blocks.propTypes = {
  blocksAreFetching: PropTypes.bool,
  blocks: PropTypes.array,
  currentNode: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    blocksAreFetching: state.blocks.blocksAreFetching,
    blocks: state.blocks.pageOfBlocks,
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(Blocks);
