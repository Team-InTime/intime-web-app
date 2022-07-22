import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  DashboardOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import logo from '../../assets/logos/logo.svg';
import clock from '../../assets/logos/clock.svg';



const { Header, Sider, Content } = Layout;

type Children = {
  children?: JSX.Element | JSX.Element[],
  path?: string;
}



export const HeaderApp: React.FC<Children> = (props ) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height: "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={ collapsed ? clock: logo} alt="intime" style={{width:'90%',height:'50px', margin: '5px 0px'}} />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items = {[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Salas ativas',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0px 24px', color:"#ffff"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            height: "auto"
          }}
        >
         {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
