import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BlockInfo from "./BlockInfo";
import { fetchBlock } from "../actions";
import store from "../store";


class Block extends React.Component {
  componentDidMount() {
    store.dispatch(fetchBlock(this.props.blockNumber));
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.location.pathname !== nextProps.location.pathname) ||
      (this.props.currentNode !== nextProps.currentNode)
    ) {
      store.dispatch(fetchBlock(nextProps.blockNumber));
    }
  }

  render() {
    const { blockFetching, blockInfo } = this.props;

    return (
      <div>
        <div>{blockFetching ? <p>Loading...</p> : <BlockInfo blockInfo={blockInfo} />}</div>
      </div>
    );
  }
}

Block.propTypes = {
  blockNumber: PropTypes.string,
  blockInfo: PropTypes.object,
  blockFetching: PropTypes.bool,
  currentNode: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    blockNumber: ownProps.match.params.blockNumber,
    blockInfo: state.blocks.block,
    blockFetching: state.blocks.blockIsFetching,
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(Block);
