import React, { useState } from 'react';
import { Layout, Menu as AntMenu } from 'antd';
import {
  AreaChartOutlined,
  ConsoleSqlOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function Menu() {
  const [hover, setHover] = useState(false);
  let navigate = useNavigate();
  const Items = [
    [AreaChartOutlined, 'Dashboard'],
    [ConsoleSqlOutlined, 'Tests'],
    [DatabaseOutlined, 'Hubs'],
  ].map(([Icon, label], index) => {
    const key = label;
    return {
      key,
      icon: <Icon className="menu-item-icon" />,
      label: <span className="menu-item-label">{label}</span>,
      style: {
        paddingLeft: 24,
        paddingTop: 4,
        paddingBottom: 4,
        height: 44,
      },
    };
  });

  const handleSelect = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <Sider
      width={250}
      className="site-layout-background"
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
      collapsed={!hover}
    >
      <AntMenu
        mode="inline"
        className="left-menu"
        style={{ height: '100%', borderRight: 0 }}
        items={Items}
        defaultSelectedKeys={['1']}
        onSelect={handleSelect}
      />
    </Sider>
  );
}
