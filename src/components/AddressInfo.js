import React from "react";
import PropTypes from "prop-types";
import Web3 from "web3";
import { Card, Tag, Icon } from "antd";
import TransactionsTable from "./TransactionsTable";
import { formatData } from "../util";
const web3 = new Web3();

class AddressInfo extends React.Component {
  render() {
    const {
      addressId,
      address,
      addressLoading,
      transactions,
      transactionsLoading
    } = this.props;

    const icon =
      address &&
      (address.code !== "0x" ? <Icon type="code" /> : <Icon type="wallet" />);
    const title = (
      <span>
        {icon} {addressId}
      </span>
    );
    return (
      <Card title={title} loading={addressLoading}>
        <h3>Account Name</h3>
        <h4>Unknown</h4>
        <h3>ETH Balance</h3>
        <h4>{address && web3.utils.fromWei(address.balance)} ETH</h4>
        <h3>USD Balance</h3>
        <h4>$X.XX USD</h4>
        <h3>Address Type</h3>
        <h4>{address && (address.code !== "0x" ? "Contract" : "Account")}</h4>
        <h3>Address Code</h3>
        <pre>{address && formatData(address.code).join("\n")}</pre>
        <br />
        <TransactionsTable
          title="Address Transactions (WIP)"
          transactions={transactions}
          loading={transactionsLoading}
        />
      </Card>
    );
  }
}

AddressInfo.propTypes = {
  address: PropTypes.object,
  addressId: PropTypes.string.required,
  addressLoading: PropTypes.bool,
  transactions: PropTypes.array,
  transactionsLoading: PropTypes.bool
};

export default AddressInfo;
