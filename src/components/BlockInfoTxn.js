import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import config from "../config";

const BlockInfoTxn = ({ txnInfo }) => {
  const { web3 } = config;
  return (
    <div>
      <p>Transaction: <Link to={`/tx/${txnInfo.hash}`}>{txnInfo.hash}</Link></p>
      <p>From: <Link to={`/address/${txnInfo.from}`}>{txnInfo.from}</Link></p>
      <p>To: <Link to={`/address/${txnInfo.to}`}>{txnInfo.to}</Link></p>
      <p>Value: {web3.utils.fromWei(txnInfo.value)} ETH</p>
    </div>
  );
};

BlockInfoTxn.propTypes = {
  txnInfo: PropTypes.object,
};

export default BlockInfoTxn;
