import React from 'react'
import { Form} from 'antd';
import {Button, Input} from './Basic';

export default function LoginForm() {
  return (
   <div className='login-form-container'>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='login-form'
    layout="vertical"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
   </div>
  )
}
