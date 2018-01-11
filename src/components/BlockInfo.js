import React from "react";
import PropTypes from "prop-types";
import BlockInfoTxn from "./BlockInfoTxn";

const BlockInfo = ({ blockInfo }) => {
  return (
    <div>
      <p>Block hash: {blockInfo.hash}</p>
      <p>Block number: {blockInfo.number}</p>
      <ul>
        {blockInfo.transactions.map((txnInfo, i) =>
            <li key={i}>
              <BlockInfoTxn txnInfo={txnInfo} />
            </li>
          )}
      </ul>
    </div>
  );
};

BlockInfo.propTypes = {
  blockInfo: PropTypes.object,
};

export default BlockInfo;
