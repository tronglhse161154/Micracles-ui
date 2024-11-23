import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Logo from "../components/layout/navbar/Logo";
import Dashboard from "../components/ui/Dashboard";
import Users from "../components/ui/User";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import CreateProduct from "./CreateProduct";
import { useDispatch } from "react-redux";
import { clearCurrentUser } from "../lib/redux/reducers/userSlice";
import ProtectedRoute from "../components/ProtectedRoute";
import toast from "react-hot-toast";
import PaymentTables from "../components/ui/PaymentTable";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    // Clear user from Redux store
    dispatch(clearCurrentUser());
    setIsOpen(false);
    toast.success("Đăng xuất thành công !");
    navigate("/");
  }, [dispatch, navigate]);

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout} icon={<LogoutOutlined />}>
        Đăng xuất
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
          <Menu.Item key="5">
            <Link to="/admin/payment">Quản lý giao dịch</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0 bg-white flex justify-end items-center">
          <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
            <div className="flex justify-end text-3xl py-2 px-6 cursor-pointer">
              <UserOutlined />
            </div>
          </Dropdown>
        </Header>
        <Content className="m-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/payment" element={<PaymentTables />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProtectedRoute(AdminPage, ["Member"]);
