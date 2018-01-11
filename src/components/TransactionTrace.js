import React from "react";
import { Card } from 'antd';

const TransactionTrace = ({ trace }) => (
  <Card title="Trace">
    <pre>
    {JSON.stringify(trace, null, 2)}
    </pre>
  </Card>
);
export default TransactionTrace;
