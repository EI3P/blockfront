import qs from "qs";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import AddressTable from "./AddressTable";
import { fetchPageOfAddresses } from "../actions";
import store from "../store";

class Addresses extends React.Component {
  componentDidMount() {
    store.dispatch(fetchPageOfAddresses(this.getLastAddress()));
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.location.pathname !== nextProps.location.pathname) ||
      (this.props.currentNode !== nextProps.currentNode)
    ) {
      store.dispatch(fetchPageOfAddresses(this.getLastAddress()));
    }
  }

  getLastAddress() {
    const queryString = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    return queryString.lastAddress || null;
  }

  render() {
    const { addressesAreFetching, addresses } = this.props;
    return (
      <AddressTable
        title="Random Addresses"
        addresses={addresses}
        loading={addressesAreFetching}
      />
    );
  }
}

Addresses.propTypes = {
  addressesAreFetching: PropTypes.bool,
  addresses: PropTypes.array,
  currentNode: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    addressesAreFetching: state.addresses.addressesAreFetching,
    addresses: state.addresses.pageOfAddresses,
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(Addresses);
