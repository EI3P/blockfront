import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCurrentNode } from "../actions";
import store from "../store";
import { Select } from 'antd';
const Option = Select.Option;

class NodeSelector extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedNode) {
    store.dispatch(updateCurrentNode(selectedNode));
  }
  render () {
    const { currentNode, availableNodes } = this.props;
    return (
      <Select defaultValue={currentNode} onChange={this.handleChange}>
        {availableNodes.map((node, i) => <Option key={i} value={node}>{node}</Option>)}
      </Select>
    );
  }
}

NodeSelector.propTypes = {
  currentNode: PropTypes.string,
  availableNodes: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    currentNode: state.nodes.current,
    availableNodes: state.nodes.available,
  };
};

export default connect(mapStateToProps, null)(NodeSelector);
