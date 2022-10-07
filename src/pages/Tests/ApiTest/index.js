import {
  Typography,
  Alert,
  PageHeader,
  Divider,
  Input,
  Row,
  Col,
  Select,
  Button,
  Tabs,
} from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';
import ApiTestHeader from './ApiTestHeader';
import Request from './Request';

export default function ApiTest() {
  const {
    messages: { apitest: i18n },
  } = useIntl();
  return (
    <div>
      <PageHeader
        title="New API Test"
        className="api-test-page-header"
      />
      <Divider />
      <ApiTestHeader />
      <Divider />
      <Row>
        <Request />
        <Col span={12}></Col>
      </Row>
    </div>
  );
}
