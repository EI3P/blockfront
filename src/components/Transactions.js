import React from "react";
import { connect } from "react-redux";

class Transactions extends React.Component {
  render() {
    console.log("this.props", this.props);
    return "transactions";
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Transactions);
