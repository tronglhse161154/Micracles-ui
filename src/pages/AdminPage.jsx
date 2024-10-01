import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route,Link } from "react-router-dom";
import Logo from "../components/layout/navbar/Logo";
import Dashboard from "../components/ui/Dashboard"; // Import your Dashboard component
import Users from "../components/ui/User"; // Import your Users component
// Import your Products component

const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  return (
    <Layout className="min-h-screen">
      <Sider collapsible className="bg-slate-100">
        <div className="bg-slate-100 flex justify-center items-center p-4">
          <div className="h-16 w-16">
            <Logo />
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/admin/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/admin/users">Users</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/admin/products">Products</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0 bg-white">
          <h1 className="text-center">Admin Dashboard</h1>
        </Header>
        <Content className="m-4">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
