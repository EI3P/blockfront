import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Transactions from "./components/Transactions";
import Block from "./components/Block";
import Blocks from "./components/Blocks";
import Address from "./components/Address";
import Addresses from "./components/Addresses";
import HeaderMenu from "./components/HeaderMenu";
import SearchBar from "./components/SearchBar";
import NodeStatus from "./components/NodeStatus";
import NodeSelector from "./components/NodeSelector";
import store, { history } from "./store";
import { Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import glamorous from "glamorous";

const ResponsiveHeaderWrapper = glamorous.div({
  "@media(max-width: 768px)": {
    "& .ant-layout-header": {
      height: "100%"
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ResponsiveHeaderWrapper>
            <Layout className="App">
              <Layout.Header className="App-header">
                <Row>
                  <Col sm={16} md={8}>
                    <HeaderMenu />
                  </Col>
                  <Col sm={16} md={8}>
                    <NodeStatus />
                  </Col>
                  <Col sm={16} md={8}>
                    <SearchBar />
                  </Col>
                </Row>
              </Layout.Header>
              <Route exact path="/" component={Home} />
              <Route exact path="/tx" component={Transactions} />
              <Route path="/tx/:txId" component={Transaction} />
              <Route exact path="/block" component={Blocks} />
              <Route path="/block/:blockNumber" component={Block} />
              <Route exact path="/address" component={Addresses} />
              <Route path="/address/:addressId" component={Address} />
              <Layout.Footer>
                <Row>
                  <Col sm={24} md={12}>
                    Blockfront 2018
                  </Col>
                  <Col sm={24} md={12}>
                    <NodeSelector />
                  </Col>
                </Row>
              </Layout.Footer>
            </Layout>
          </ResponsiveHeaderWrapper>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
