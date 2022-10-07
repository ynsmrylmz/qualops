import { Modal, Tag, Button, Col, Row } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const tests = [
  {
    key: 1,
    title: 'API',
    labels: ['Label1'],
    description:
      'Test your REST APIs to the functionality, performance, reliability and security check..',
    route: 'apitest',
  },
  {
    key: 2,
    title: 'API',
    labels: ['Label2', 'Label2'],
    description:
      'Test your REST APIs to the functionality, performance, reliability and security check..',
    route: 'apitest',
  },
  {
    key: 3,
    title: 'Manual',
    labels: ['Label1'],
    description:
      'Manual testing, as the term suggests, refers to a test process in which a QA manually tests the software application in order to identify bugs.',
    route: 'apitest',
  },
  {
    key: 4,
    title: 'API',
    labels: ['Label2'],
    description:
      'Test your REST APIs to the functionality, performance, reliability and security check..',
    route: 'apitest',
  },
];

export default function TestModal() {
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();
  const renderBox = useCallback(({ title, labels, description }) => {
    const handleClick = () => {
      navigate('/pages/apitest');
      setVisible(false);
    };

    return (
      <Col md={24} lg={12}>
        <div className="new-test-box" onClick={handleClick}>
          <div className="new-test-box-title">
            <span className="title">{title}</span>
            <div>
              {labels.map((label) => (
                <Tag>{label}</Tag>
              ))}
            </div>
          </div>
          <div className="description">{description}</div>
        </div>
      </Col>
    );
  }, []);

  const handleClick = () => {
    setVisible(true);
  };

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, []);

  const handleOk = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={handleClick}
        >
          Create New Test
        </Button>
        <Modal
          title="New Test"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="Test-Modal"
        >
          <Row>{tests.map(renderBox)}</Row>
        </Modal>
      </Col>
    </Row>
  );
}
