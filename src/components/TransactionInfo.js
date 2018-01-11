import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TransactionLogs from "./TransactionLogs";
import TransactionTrace from "./TransactionTrace";

const TransactionInfo = ({ info, receipt, trace }) => (
  <div>
    <dl>
      <dt>Hash</dt>
      <dd>{info.hash}</dd>
      <dt>Nonce</dt>
      <dd>{info.nonce}</dd>
      <dt>Block Hash</dt>
      <dd>
        <Link to={`/block/${info.blockHash}`}>{info.blockHash}</Link>
      </dd>
      <dt>Block Number</dt>
      <dd>
        <Link to={`/block/${info.blockHash}`}>{info.blockNumber}</Link>
      </dd>
      <dt>From</dt>
      <dd>
        <Link to={`/address/${info.from}`}>{info.from}</Link>
      </dd>
      <dt>To</dt>
      <dd>
        <Link to={`/address/${info.to}`}>{info.to}</Link>
      </dd>
      <dt>Value</dt>
      <dd>{info.value}</dd>
      <dt>Gas Price</dt>
      <dd>{info.gasPrice}</dd>
      <dt>Gas</dt>
      <dd>{info.gas}</dd>
      <dt>Input Data</dt>
      <dd>{info.input}</dd>
    </dl>
    {receipt && receipt.logs.length > 0 ? <TransactionLogs logs={receipt.logs} /> : <b>No logs</b>}
    {trace && trace.length > 0 ? <TransactionTrace trace={trace} /> : <b>No trace </b>}
  </div>
);

TransactionInfo.propTypes = {
  info: PropTypes.object,
  receipt: PropTypes.object,
  trace: PropTypes.array
};

export default TransactionInfo;
