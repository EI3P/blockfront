import React from "react";
import AddressSummary from "./AddressSummary";

export default class AddressList extends React.Component {
  render() {
    const { addresses } = this.props;
    const fetchedAddresses = addresses.filter((address) => !address.addressIsFetching);

    return (
      <div>
        {fetchedAddresses.map((fetchedAddress, i) => <AddressSummary address={fetchedAddress.address} isContract={fetchedAddress.isContract} key={i} />)}
      </div>
    );
  }
}
