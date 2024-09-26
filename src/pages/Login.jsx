

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md min-h-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-6">Đăng nhập </h1>
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              type="email"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="mb-4">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="submit"
              className="w-full bg-[#FFE8AC] hover:bg-white text-black rounded-md"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            Chưa có tài khoản?
            <Link to="/register" className="ml-2 text-blue-500 hover:underline">
              Đăng ký
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
