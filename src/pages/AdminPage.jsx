import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "../components/layout/navbar/Logo";
import Dashboard from "../components/ui/Dashboard"; // Import your Dashboard component
import Users from "../components/ui/User"; // Import your Users component
// Import your Products component

const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  return (
    <Layout className="min-h-screen">
      <Sider collapsible style={{ backgroundColor: 'white' }}> {/* Set Sider background to white */}
        <div className="flex justify-center items-center p-4">
          <div className="h-16 w-16"> {/* Increased the size of the logo */}
            <Logo />
          </div>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}> {/* Change theme to light */}
          <Menu.Item key="1"><Link to="/admin/dashboard">Thống kê</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/admin/users">Quản lý khách hàng</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/admin/products">Quản lý sản phẩm</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0 bg-white">
          <h1 className="text-center"></h1>
        </Header>
        <Content className="m-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;