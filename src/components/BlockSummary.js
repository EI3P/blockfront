import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlockSummary = ({ block }) => {
    // XXX Probably want date and some other stuff
    return (
      <div>
        <p>Block hash: {block.hash}</p>
        <p>Block number: <Link to={`/block/${block.number}`}>{block.number}</Link></p>
      </div>
    );
};

BlockSummary.propTypes = {
  block: PropTypes.object
};

export default BlockSummary;
