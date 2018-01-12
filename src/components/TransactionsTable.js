import React from "react";
import { Table, Card } from "antd";
import { Link } from "react-router-dom";
import Web3 from "web3";
import PropTypes from "prop-types";

const web3 = new Web3();

const { Column } = Table;

class TransactionsTable extends React.Component {
  render() {
    const { title, transactions, loading } = this.props;
    // TODO: display if txn was an error
    // display gas
    return (
      <Card title={title}>
        <Table
          pagination={false}
          loading={loading}
          dataSource={transactions}
          rowKey="hash"
        >
          <Column
            title="Hash"
            dataIndex="hash"
            key="hash"
            render={t =>
              t && <Link to={`/tx/${t}`}>{t.substring(0, 14)}...</Link>
            }
          />
          <Column
            title="Block"
            dataIndex="blockNumber"
            key="blockNumber"
            render={t => t && <Link to={`/block/${t}`}>{t}</Link>}
          />
          <Column
            title="From"
            dataIndex="from"
            key="from"
            render={t =>
              t && <Link to={`/address/${t}`}>{t.substring(0, 14)}...</Link>
            }
          />
          <Column
            title="To"
            dataIndex="to"
            key="to"
            render={t =>
              t && <Link to={`/address/${t}`}>{t.substring(0, 14)}...</Link>
            }
          />
          <Column
            title="Value"
            dataIndex="value"
            key="value"
            render={t => web3.utils.fromWei(t)}
          />
        </Table>
      </Card>
    );
  }
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool
};

export default TransactionsTable;
