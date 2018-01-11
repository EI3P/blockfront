import React from "react";
import PropTypes from "prop-types";
import BlockSummary from "./BlockSummary";

export default class BlockList extends React.Component {
  render() {
    const { blocks } = this.props;
    const fetchedBlocks = blocks.filter((block) => !block.blockIsFetching);

    return (
      <div>
        {fetchedBlocks.map((fetchedBlock, i) => <BlockSummary block={fetchedBlock.block} key={i} />)}
      </div>
    );
  }
}

BlockList.propTypes = {
  blocks: PropTypes.array,
};
