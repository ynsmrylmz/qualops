import { Layout, Menu } from 'antd';
import React from 'react';

const { Sider } = Layout;

export default function LeftMenu() {
  return (
    <Sider>
      <Menu></Menu>
    </Sider>
  );
}
