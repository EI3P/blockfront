import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Transactions from "./components/Transactions";
import Block from "./components/Block";
import Blocks from "./components/Blocks";
import Address from "./components/Address";
import Addresses from "./components/Addresses";
import SearchBar from "./components/SearchBar";
import store, { history } from "./store";
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
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Blockfront</h1>
              <Link to="/tx">Tx</Link>
              <Link to="/block">Block</Link>
              <Link to="/address">Address</Link>
              <SearchBar />
            </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/tx" component={Transactions} />
            <Route path="/tx/:txId" component={Transaction} />
            <Route exact path="/block" component={Blocks} />
            <Route path="/block/:blockNumber" component={Block} />
            <Route exact path="/address" component={Addresses} />
            <Route path="/address/:addressId" component={Address} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
