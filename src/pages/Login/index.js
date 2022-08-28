import React from 'react'
import { Row, Col }from 'antd';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <Row className='login-container'>
      <Col span={12}><div className='login-sidebar'></div></Col>
      <Col span={12}><LoginForm/></Col>
    </Row>
  )
}
