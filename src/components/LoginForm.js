import React from 'react'
import { Form, Input, Button, Typography, Row, Col, Space, Checkbox} from 'antd';
import { MailOutlined, UnlockFilled, UnlockOutlined, UnlockTwoTone, MailTwoTone} from '@ant-design/icons';
import {useIntl} from 'react-intl';

const { Title, Paragraph } = Typography;

export default function LoginForm() {
  const {messages : {login : i18n}} = useIntl();
  return (    
   <div className='login-form-container'>
     <div className='login-form-title'>
     <Title level={2}>
        {i18n.title} !
      </Title>
     </div>
      <Form
    name="basic"
    wrapperCol={{ span: 24 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailes}
    autoComplete="off"
    className='login-form'
    layout="vertical"
    requiredMark={false}
  >
    <Form.Item
      name="mail"
      rules={[{ required: true, message:i18n.validationMessages.mail }]}
    >
      <Input prefix={<MailTwoTone twoToneColor='#514698'/>} placeholder={i18n.mail}/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: i18n.validationMessages.password}]}
    >
      <Input.Password prefix={<UnlockTwoTone twoToneColor="#514698"/>} placeholder={i18n.password}/>
    </Form.Item>

    <Form.Item
    >
      <Checkbox name='remember'>

      {i18n.remember}
      </Checkbox>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" shape="round" block>
        {
          i18n.button
        }
      </Button>
    </Form.Item>
  </Form>
   </div>
  )
}
