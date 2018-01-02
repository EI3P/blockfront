import React from "react";
import { push } from "react-router-redux";
import store from "../store";

// web3 has isAddress and isStrictAddress but does not expose isStrictAddress
function isStrictAddress(value) {
  return /^0x[0-9a-f]{40}$/i.test(value);
}

function isStrictTransaction(value) {
  return /^0x[0-9a-f]{64}$/i.test(value);
}

function isBlock(value) {
  return !isNaN(parseInt(value, 10));
}

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input style={{width: "270px"}} placeholder="Block # | Transaction hash | Address hash" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    const query = this.state.query;
    const result = this.search(query);

    if (result !== null) {
      store.dispatch(push(result));
      this.setState({
        query: ""
      });
    }

    event.preventDefault();
  }

  search(query) {
    // FIXME : Handle non-strict hashes that are missing 0x
    let result = null;

    if (isStrictAddress(query)) {
      result = `/address/${query}`;
    }
    else if (isStrictTransaction(query)) {
      result = `/tx/${query}`;
    }
    else if (isBlock(query)) {
      result = `/block/${query}`;
    }

    return result;
  }
}
