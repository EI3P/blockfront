import React from "react";
import { Card } from 'antd';
import TransactionLog from "./TransactionLog";

const TransactionLogs = ({ logs }) => (
  <Card title="Event Logs">
    {logs.map((log) => <TransactionLog log={log} />)}
  </Card>
);
export default TransactionLogs;
