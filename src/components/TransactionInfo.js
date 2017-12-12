import React from "react";

const TransactionInfo = ({ info }) => (
  <dl>
    <dt>From</dt>
    <dv>{info.from}</dv>
  </dl>
);

export default TransactionInfo;
