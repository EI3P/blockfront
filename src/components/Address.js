import React from "react";
import { connect } from "react-redux";
import AddressInfo from "./AddressInfo";
import config from "../config";

// XXX How to get inbound and outbound transactions ?
// I think we will want our own tables of blocks and
// transactions - since these are immutable we shouldn't
// have to make an RPC call to get them. However, if
// people want to view them at a block other than latest
// we may need a different approach.

class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      // FIXME: Set from redux
      // XXX: This should render as `page + 1`
      page: 0,
      pageSize: 5
    };
  }

  getPageOfAddressTxns() {
    const { addressId } = this.props;
    const { latestBlockNumber, page, pageSize } = this.state;
    const { web3 } = config;

    let highBlockNumber = latestBlockNumber - page * pageSize;
    highBlockNumber = highBlockNumber > 0 ? highBlockNumber : pageSize;

    let lowBlockNumber = highBlockNumber > pageSize ? (highBlockNumber - pageSize) : "0";

    return web3.eth.getPastLogs({
      "fromBlock": String(lowBlockNumber),
      "toBlock": String(highBlockNumber),
      "address": addressId
    });
  }

  componentDidMount() {
    const { addressId } = this.props;
    const { web3 } = config;

    web3.eth
      .getBlock("latest", false)
      .then(block => {
        this.setState({
          latestBlockNumber: block.number
        });

        Promise.all([
          web3.eth.getBalance(addressId, "latest"),
          this.getPageOfAddressTxns(),
          web3.eth.getCode(addressId, "latest"),
        ]).then(([balance, transactions, code]) => {
          this.setState({
            loading: false,
            addressInfo: {
              id: addressId,
              balance,
              transactions,
              code,
            }
          });
        });
      });
  }

  render() {
    const { loading, addressInfo } = this.state;

    return (
      <div>
        <div>{loading ? <p>Loading...</p> : <AddressInfo addressInfo={addressInfo} />}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { addressId: ownProps.match.params.addressId };
};

export default connect(mapStateToProps, null)(Address);
