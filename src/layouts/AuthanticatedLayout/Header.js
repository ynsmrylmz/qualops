import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { ReactComponent as Logo } from './logo-full.svg';

import TestModal from '../../components/TestModal';

const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader className="header">
      <Logo />
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      /> */}
      <TestModal />
    </AntHeader>
  );
}
