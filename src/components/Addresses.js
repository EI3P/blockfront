import React from "react";
import { connect } from "react-redux";

// XXX I think there could be a list view here but
// much more curated than the other ones - lists
// popular contracts, tokens & distinguishes them.
// Could also be split into /contract and /token views.

class Addresses extends React.Component {
  render() {
    return "address";
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Addresses);
