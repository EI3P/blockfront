import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tag } from 'antd';

class NodeStatus extends React.Component {
  render () {
    const { currentNode } = this.props;
    return (<Tag>{ currentNode }</Tag>);
  }
}

NodeStatus.propTypes = {
  currentNode: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    currentNode: state.nodes.current,
  };
};

export default connect(mapStateToProps, null)(NodeStatus);
