import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import glamorous from 'glamorous';

const ResponsiveWrapper = glamorous.div({
  '@media(max-width: 768px)': {
    '& a': {
      fontSize: '12px'
    }
  },
})

class HeaderMenu extends Component {
  render() {
    return (
      <ResponsiveWrapper>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="0">
            <Link to="/">
              <b style={{color: '#fafafa'}}>
                Blockfront
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/tx">
              Tx
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/block">
              Block
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/address">
              Address
            </Link>
          </Menu.Item>
        </Menu>
      </ResponsiveWrapper>
    )
  }
}

export default HeaderMenu
