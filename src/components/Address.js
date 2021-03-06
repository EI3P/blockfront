import qs from "qs";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddressInfo from "./AddressInfo";
import { fetchAddress, fetchPageOfAddressTransactions } from "../actions";
import store from "../store";

class Address extends React.Component {
  componentDidMount() {
    store.dispatch(fetchAddress(this.props.addressId));
    store.dispatch(
      fetchPageOfAddressTransactions(this.props.addressId, this.getPageNumber())
    );
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.location.pathname !== nextProps.location.pathname)
      || (this.props.currentNode !== nextProps.currentNode)) {
      store.dispatch(fetchAddress(nextProps.addressId));
      store.dispatch(
        fetchPageOfAddressTransactions(
          nextProps.addressId,
          this.getPageNumber()
        )
      );
    }
  }

  getPageNumber() {
    const queryString = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    return queryString.page || 0;
  }

  render() {
    const {
      addressIsFetching,
      addressTransactionsAreFetching,
      address,
      addressTransactions,
      addressId
    } = this.props;

    return (
      <div>
        <AddressInfo
          address={address}
          addressId={addressId}
          addressLoading={addressIsFetching}
          transactions={addressTransactions}
          transactionsLoading={addressTransactionsAreFetching}
        />
      </div>
    );
  }
}

Address.propTypes = {
  addressId: PropTypes.string,
  addressIsFetching: PropTypes.bool,
  addressTransactionsAreFetching: PropTypes.bool,
  address: PropTypes.object,
  addressTransactions: PropTypes.array,
  currentNode: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    addressId: ownProps.match.params.addressId,
    addressIsFetching: state.addresses.addressIsFetching,
    addressTransactionsAreFetching:
      state.addresses.addressTransactionsAreFetching,
    address: state.addresses.address,
    addressTransactions: state.addresses.addressTransactions,
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(Address);
