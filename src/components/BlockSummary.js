import React from "react";

export default class BlockSummary extends React.Component {
  render() {
    const { block } = this.props;

    // XXX Probably want date and some other stuff
    return (
      <div>
        <p>Block hash: {block.hash}</p>
        <p>Block number: {block.number}</p>
      </div>
    );
  }
}
