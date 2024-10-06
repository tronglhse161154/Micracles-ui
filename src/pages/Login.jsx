import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../lib/api/Authen";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { setCurrentUser } from "../lib/redux/reducers/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const result = await dispatch(loginUser(data.email, data.password));
        setIsLoading(false);

        // Store token in localStorage (or sessionStorage as in loginUser function)
        if (result.user) {
          dispatch(setCurrentUser(result.user));
          toast.success("Đăng nhập thành công!");
          navigate("/");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Email hoặc mật khẩu không đúng!");
        console.error("Login error:", error);
      }
    },
    [dispatch, navigate]
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md min-h-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-6">Đăng nhập</h1>
        <Form
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)} // Using react-hook-form's handleSubmit
        >
          {/* Email Input */}
          <Form.Item
            validateStatus={errors.email ? "error" : ""}
            help={errors.email ? errors.email.message : ""}
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: "Please input your Email!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  type="email"
                  className="rounded-md"
                />
              )}
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            validateStatus={errors.password ? "error" : ""}
            help={errors.password ? errors.password.message : ""}
          >
            <Controller
              name="password"
              control={control}
              rules={{ required: "Please input your Password!" }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  className="rounded-md"
                />
              )}
            />
          </Form.Item>

          {/* Remember me Checkbox */}
          <Form.Item>
            <Controller
              name="remember"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox {...field} className="mb-4">
                  Remember me
                </Checkbox>
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#FFE8AC] hover:bg-white text-black rounded-md"
              loading={isLoading}
            >
              Login
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            Bạn là người mới ?
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
