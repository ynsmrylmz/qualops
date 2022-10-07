import CopyAllIcon from '@mui/icons-material/CopyAll';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button, Col, Input, Row, Select } from 'antd';
import React from 'react';
import Aligner from '../../../components/IconAligner';
import { useIntl } from 'react-intl';

export default function ApiTestHeader() {
  const {
    messages: { apitest: i18n },
  } = useIntl();
  return (
    <Row>
      <Col xs={24} sm={12} md={7} lg={5}>
        <Input placeholder={i18n.placeholder.name} size="large" />
      </Col>
      <Col xs={24} sm={12} md={7} lg={5}>
        <Input placeholder={i18n.placeholder.tag} size="large" />
      </Col>
      <Col xs={24} sm={15} md={4} lg={3}>
        <Select size="large">
          <Select.Option>Test1</Select.Option>
          <Select.Option>Test2</Select.Option>
        </Select>
      </Col>
      <Col xs={8} sm={3} md={2} lg={1}>
        <Aligner>
          <RefreshIcon />
        </Aligner>
      </Col>
      <Col xs={8} sm={3} md={2} lg={1}>
        <Aligner>
          <CopyAllIcon />
        </Aligner>
      </Col>
      <Col xs={8} sm={3} md={2} lg={1}>
        <Aligner>
          <DeleteIcon />
        </Aligner>
      </Col>
      <Col xs={24} sm={12} md={12} lg={4}>
        <Button size="large">{i18n.buttons.save}</Button>
      </Col>
      <Col xs={24} sm={12} md={12} lg={4}>
        <Button type="primary" size="large">
          {i18n.buttons.run}
        </Button>
      </Col>
    </Row>
  );
}
