import { Col, Row, Tabs } from 'antd';
import React from 'react';
import Adress from './Adress';
import Authorization from './Authorization';
import Body from './Body';
import Headers from './Headers';
import Params from './Params';
import RequestScript from './RequestScript';
import Settings from './Settings';
import Tests from './Tests';

export default function index() {
  return (
    <Col span={24}>
      <Adress />
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Params" key="1">
              <Params />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Authorization" key="2">
              <Authorization />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Headers" key="3">
              <Headers />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Body" key="4">
              <Body />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Pre-request Script" key="5">
              <RequestScript />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tests" key="6">
              <Tests />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Settings" key="7">
              <Settings />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </Col>
  );
}
