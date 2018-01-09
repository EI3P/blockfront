import React from "react";
import { Link } from "react-router-dom";
import { formatData, formatTopics } from "../util";

const TransactionLog = ({ log }) => (
  <div>
    <p>
      <b>Address</b>
      <div>
        <Link to={`/address/${log.address}/`}>{log.address}</Link>
      </div>
    </p>
    <div>
      <b>Topics</b>
      <pre>{formatTopics(log.topics).join('\n')}</pre>
    </div>
    <div>
      <b>Data</b>
      <pre>
      {formatData(log.data).join('\n')}
      </pre>
    </div>
  </div>
);

export default TransactionLog;
