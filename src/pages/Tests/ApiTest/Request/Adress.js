import { Col, Input, Row, Select } from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';

export default function Adress() {
  const {
    messages: { apitest: i18n },
  } = useIntl();
  return (
    <Row>
      <Col xs={24} sm={12} md={12} lg={8}>
        <Select
          style={{ width: '100%' }}
          size="large"
          defaultValue={'GET'}
        >
          <Select.Option value="GET">GET</Select.Option>
          <Select.Option value="POST">POST</Select.Option>
          <Select.Option value="HEAD">HEAD</Select.Option>
          <Select.Option value="PUT">PUT</Select.Option>
          <Select.Option value="PATCH">PATCH</Select.Option>
          <Select.Option value="DELETE">DELETE</Select.Option>
          <Select.Option value="OPTIONS">OPTIONS</Select.Option>
        </Select>
      </Col>
      <Col xs={24} sm={12} md={12} lg={16}>
        <Input placeholder={i18n.placeholder.url} size="large" />
      </Col>
    </Row>
  );
}
