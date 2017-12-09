import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Transaction from "./components/Transaction";
import Block from "./components/Block";
import Address from "./components/Address";
import "normalize.css";
import "@blueprintjs/core/dist/blueprint.css";
import "@blueprintjs/core/resources/icons/icons-20.woff";
import "@blueprintjs/core/resources/icons/icons-20.ttf";
import "@blueprintjs/core/resources/icons/icons-20.eot";
import "@blueprintjs/core/resources/icons/icons.json";
import "bootstrap-4-grid/css/grid.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blockfront</h1>
          <Link to="/tx">Tx</Link>
          <Link to="/block">Block</Link>
          <Link to="/address">Address</Link>
        </header>
        <p>Home</p>
        <Route path="/tx" component={Transaction} />
        <Route path="/block" component={Block} />
        <Route path="/address" component={Address} />
      </div>
    );
  }
}

export default App;
