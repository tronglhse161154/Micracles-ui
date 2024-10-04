import React from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Logo from "../components/layout/navbar/Logo";
import Dashboard from "../components/ui/Dashboard";
import Users from "../components/ui/User";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import CreateProduct from "./CreateProduct";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session data or token here
    localStorage.removeItem("userToken"); // Example: remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      <Sider collapsible style={{ backgroundColor: "white" }}>
        <Link to="/">
          <div className="flex justify-center items-center p-4">
            <div className="h-16 w-16">
              <Logo />
            </div>
          </div>
        </Link>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/admin/dashboard">Thống kê</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/users">Quản lý khách hàng</Link>
          </Menu.Item>
          <SubMenu key="sub1" title="Quản lý sản phẩm">
            <Menu.Item key="3">
              <Link to="/admin/products">Danh sách sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/admin/create">Thêm sản phẩm</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0 bg-white flex justify-end items-center">
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <div className="flex justify-end text-3xl py-2 px-6">
            <UserOutlined/>
            </div>
          </Dropdown>
        </Header>
        <Content className="m-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
