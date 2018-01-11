import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';
import TransactionLog from "./TransactionLog";

const TransactionLogs = ({ logs }) => (
  <Card title="Event Logs">
    {logs.map((log) => <TransactionLog log={log} />)}
  </Card>
);

TransactionLogs.propTypes = {
  logs: PropTypes.array,
};

export default TransactionLogs;
