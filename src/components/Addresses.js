import qs from "qs";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import AddressList from "./AddressList";
import { fetchPageOfAddresses } from "../actions";
import store from "../store";

class Addresses extends React.Component {
  componentDidMount() {
    store.dispatch(fetchPageOfAddresses(this.getLastAddress()));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      store.dispatch(fetchPageOfAddresses(this.getLastAddress()));
    }
  }

  getLastAddress() {
    const queryString = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    return queryString.lastAddress || null;
  }

  // FIXME This will probably look uglier than with blocks
  renderAddressesToFetch(addresses) {
    const addressIds = (
      addresses
        .filter(a => a.addressIsFetching)
        .map(a => a.addressId)
        .join(', ')
    );
    return <i>Fetching {addressIds}</i>
  }

  render() {
    const { addressesAreFetching, addresses } = this.props;
    return (
      <div>
        <div>
          { addressesAreFetching && this.renderAddressesToFetch(addresses) }
          <AddressList addresses={addresses} />
        </div>
      </div>
    );
  }
}

Addresses.propTypes = {
  addressesAreFetching: PropTypes.bool,
  addresses: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    addressesAreFetching: state.addresses.addressesAreFetching,
    addresses: state.addresses.pageOfAddresses
  };
};

export default connect(mapStateToProps, null)(Addresses);
