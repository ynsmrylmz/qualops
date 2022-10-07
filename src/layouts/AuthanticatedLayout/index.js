import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import Header from '../../layouts/AuthanticatedLayout/Header';
import Menu from '../../layouts/AuthanticatedLayout/Menu';

const { Footer, Content, Sider } = Layout;

export default function AuthanticatedLayout(props) {
  return (
    <Layout>
      <Header />
      <Layout>
        <Menu />
        <Layout
          style={{ padding: '0 24px 24px' }}
          className="page-container"
        >
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="page-content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
