

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { createElement } from 'react';

const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );
const items = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'Users',
  },
  {
    key: '3',
    label: 'Products',
  },
  {
    key: '4',
    label: 'User Management',
  }
]
const MainLayout = () => {

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h2>This is a content section</h2>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright &copy; 2024-{new Date().getFullYear()} PH University All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout