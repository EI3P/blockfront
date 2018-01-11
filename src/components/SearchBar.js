import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import {
  clearSearchQuery,
  updateSearchQuery,
  invalidSearchQuery,
} from "../actions";
import store from "../store";
import { isStrictAddress, isStrictTransaction, isBlock } from "../util";
import { Input } from 'antd';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { query, validQuery } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input.Search
            placeholder="Block # | Transaction hash | Address hash"
            value={query}
            onChange={this.handleChange}
          />
          <div>
            {validQuery || <strong style={{ color: "red" }}>Invalid input, please use strict formatting for hashes.</strong>}
          </div>
        </form>
      </div>
    );
  }

  handleChange(event) {
    store.dispatch(updateSearchQuery(event.target.value));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { query } = this.props;

    if (isStrictAddress(query)) {
      store.dispatch(clearSearchQuery());
      store.dispatch(push(`/address/${query}`));
    } else if (isStrictTransaction(query)) {
      store.dispatch(clearSearchQuery());
      store.dispatch(push(`/tx/${query}`));
    } else if (isBlock(query)) {
      store.dispatch(clearSearchQuery());
      store.dispatch(push(`/block/${query}`));
    } else  {
      store.dispatch(invalidSearchQuery())
    }
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  validQuery: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    query: state.search.query,
    validQuery: state.search.validQuery
  };
};

export default connect(mapStateToProps, null)(SearchBar);
