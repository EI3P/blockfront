import React from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <Layout.Content
        style={{ padding: '20px 50px' }}
      >
        <h2>Welcome to Blockfront, the fast and reliable block explorer.</h2>
      </Layout.Content>
    )
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, null)(Home);
