import React from "react";
import { connect } from "react-redux";

class Blocks extends React.Component {
  render() {
    console.log("this.props", this.props);
    return "blocks";
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Blocks);
