import React from "react";
import PropTypes from "prop-types";
import AddressSummary from "./AddressSummary";

const AddressList = ({ addresses }) => {
  const fetchedAddresses = addresses.filter((address) => !address.addressIsFetching);
  return (
    <div>
      {fetchedAddresses.map((fetchedAddress, i) => <AddressSummary address={fetchedAddress.address} isContract={fetchedAddress.isContract} key={i} />)}
    </div>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.array,
};

export default AddressList;
