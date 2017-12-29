import React from "react";
import { Link } from "react-router-dom";

export default class AddressSummary extends React.Component {
  render() {
    const { address } = this.props;

    return (
      <div>
        <p>Address: <Link to={`/address/${address}`}>{address}</Link></p>
      </div>
    );
  }
}
