import React from "react";
import { Link } from "react-router-dom";

const TransactionInfo = ({ info }) => (
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
);

export default TransactionInfo;
