import React from "react";
import AddressSummary from "./AddressSummary";

export default class AddressList extends React.Component {
  render() {
    const { addresses } = this.props;

    return (
      <div>
        {addresses.map((address, i) => <AddressSummary address={address} key={i} />)}
      </div>
    );
  }
}
