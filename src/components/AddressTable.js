import React from "react";
import PropTypes from "prop-types";
import AddressSummary from "./AddressSummary";
import { Table, Card, Tag } from "antd";
import { Link } from "react-router-dom";
import Web3 from "web3";
const { Column } = Table;

const web3 = new Web3();

const AddressTable = ({ addresses, title, loading }) => {
  return (
    <Card title={title}>
      <Table
        pagination={false}
        loading={loading}
        dataSource={addresses}
        rowKey="addressId"
      >
        <Column
          title="Type"
          dataIndex="address.code"
          key="address.code"
          render={c =>
            c !== undefined &&
            (c !== "0x" ? <Tag>Contract</Tag> : <Tag>Account</Tag>)
          }
        />
        <Column
          title="Address"
          dataIndex="addressId"
          key="addressId"
          render={a => <Link to={`/address/${a}`}>{a}</Link>}
        />
        <Column
          title="Balance"
          dataIndex="address.balance"
          key="address.balance"
          render={t => t && web3.utils.fromWei(t)}
        />
        <Column
          title="Transaction Count"
          dataIndex="address.transactionCount"
          key="address.transactionCount"
        />
      </Table>
    </Card>
  );
};

AddressTable.propTypes = {
  addresses: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool
};

export default AddressTable;
