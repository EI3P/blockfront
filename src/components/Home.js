import React from "react";
import { connect } from "react-redux";
import { Layout, Card, List, Avatar } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <Layout.Content
        style={{ padding: '20px 50px' }}
      >
        <br />
        <h1>Welcome to Blockfront, the fast and reliable block explorer.</h1>
        <br />
        <Card title="Decentralized and Open" bordered={false}>
          <h3>The Ethereum network doesn't experience outages, so why should an Ethereum block explorer?</h3>
          <p>Blockfront sources data directly from Ethereum nodes to prevent downtime.</p>
          <p>What about data that can't be found on-chain? Blockfront leverages open data repositories.</p>
          <List header={<b>Blockfront Open Data Repositories</b>}>
            <List.Item actions={[<a>View API</a>, <a>Submit</a>]}>
              Open Smart Contract ABI Index (OSCAI)
            </List.Item>
            <List.Item actions={[<a>View API</a>, <a>Submit</a>]}>
              Open Address Label Index (OALI)
            </List.Item>
            <List.Item actions={[<a>View API</a>, <a>Submit</a>]}>
              Open Smart Contract Rating Index (OSCRI)
            </List.Item>
            <List.Item>
              Network Status Metadata
            </List.Item>
            <List.Item>
              Price Data
            </List.Item>
            <List.Item>
              News and Social Data
            </List.Item>
          </List>
        </Card>
        <br />
        <Card title="Fast and Structured" bordered={false}>
          <h3>Get data fast, in the format you need.</h3>
          <p>For professional users, Blockfront provides market data feeds and a robust, standard query engine for blockchain queries.</p>
          <List>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="database" />}
                title="The Blockfront Connector Database"
                description="Blockfront offers highly-optimized replicas of the current Ethereum blockchain. Simply use microraiden to pay for accelerated queries."
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="bar-chart" />}
                title="The Blockfront Insight API"
                description="Use the Insight API to get detailed analysis of token holders and and transactions, or view charts in the browser."
              />
            </List.Item>
          </List>
        </Card>
      </Layout.Content>
    )
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Home);
