import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';

const TransactionTrace = ({ trace }) => (
  <Card title="Trace">
    <pre>
    {JSON.stringify(trace, null, 2)}
    </pre>
  </Card>
);

TransactionTrace.propTypes = {
  trace: PropTypes.object,
};

export default TransactionTrace;
