import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return "Welcome to Blockfront";
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Home);
