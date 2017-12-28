import React from "react";
import BlockSummary from "./BlockSummary";

export default class BlockList extends React.Component {
  render() {
    const { blocks } = this.props;

    return (
      <div>
        {blocks.map((block, i) => <BlockSummary block={block} key={i} />)}
      </div>
    );
  }
}