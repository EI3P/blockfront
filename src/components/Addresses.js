import React from "react";
import { connect } from "react-redux";
import fetch from "node-fetch";
import AddressList from "./AddressList";

// FIXME Etherchain light calls parity_listAccounts on their own web3 fork. We
// will perform this call manually with `fetch` for now

class Addresses extends React.Component {
  constructor() {
    super();
    this.state = {
      lastAddress: null,
      loading: true,
      pageSize: 15
    };
  }

  componentDidMount() {
    // XXX Add more data for each address
    this.getListOfAddresses()
      .then((addresses) => {
        this.setState({
          addresses,
          // FIXME : Put this in a query param
          lastAddress: addresses[addresses.length - 1],
          loading: false,
        });
      });
  }

  getListOfAddresses() {
    return fetch(
      "http://node.blockfront.io:8545",
      {
        method: "POST",
        body: JSON.stringify({
          "method":"parity_listAccounts",
          "params": [this.state.pageSize, this.state.lastAddress],
          "id": 1,
          "jsonrpc": "2.0"
        }),
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(res => res.json())
    .then(body => body.result);
  }

  render() {
    const { addresses, loading } = this.state;
    return (
      <div>
        <div>{loading ? <p>Loading...</p> : <AddressList addresses={addresses} />}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Addresses);
