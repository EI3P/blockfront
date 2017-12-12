import React from "react";

import BlockInfoTxn from "./BlockInfoTxn"

export default class BlockInfo extends React.Component {
  render() {
    const { blockInfo } = this.props;

    return (
      <div>
        <p>Block hash: {blockInfo.hash}</p>
        <p>Block number: {blockInfo.number}</p>
        <ul>
          {blockInfo.transactions.map((txnInfo) =>
              <li>
                <BlockInfoTxn txnInfo={txnInfo} />
              </li>
            )}
        </ul>
      </div>
    );
  }
}
