import {
  Col,
  Row,
  Select,
  Form,
  Input,
  Button,
  Collapse,
} from 'antd';
import React, { useState } from 'react';

export default function Authorization() {
  const [type, setType] = useState('basic');

  return (
    <Row
      gutter={16}
      style={{
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '16px',
      }}
    >
      <Col flex="250px" style={{ borderRight: '1px solid #f0f0f0' }}>
        <Select size="large" value={type} onChange={setType}>
          <Select.Option value="basic">Basic</Select.Option>
          <Select.Option value="ntlm">NTLM</Select.Option>
          <Select.Option value="negotiate">Negotiate</Select.Option>
          <Select.Option value="bearer">Bearer</Select.Option>
        </Select>
      </Col>
      <Col flex="auto">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          autoComplete="off"
          style={{
            padding: '12px 16px',
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            hidden={!['ntlm', 'basic'].includes(type)}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hidden={!['ntlm', 'basic'].includes(type)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Token"
            name="token"
            hidden={type != 'bearer'}
            rules={[
              {
                required: true,
                message: 'Please input your token!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
        <Collapse
          ghost
          style={{ display: `${type === 'ntlm' ? 'block' : 'none'}` }}
        >
          <Collapse.Panel header="ADVANCED" key="1">
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </Collapse.Panel>
        </Collapse>
      </Col>
    </Row>
  );
}
