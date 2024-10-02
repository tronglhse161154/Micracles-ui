import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
  HeatMapOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { registerUser } from "../lib/api/Authen";
import toast from "react-hot-toast";
import useOTPconfirmModal from "../components/hooks/useOTPconfirmModal";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const OTPconfirmModal = useOTPconfirmModal();
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      userName: ""
    },
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const email = data.email;
        await registerUser(
          email,
          data.userName,
          data.password,
          data.fullName,
          
        );
        setIsLoading(false);
        OTPconfirmModal.onOpen(email);
        toast.success("Check your email to finish register!");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error("Email already exists!");
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign up</h1>
        <Form
          name="register"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)} // Use handleSubmit from React Hook Form
        >
          <Form.Item>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Please input your Name" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                  className="rounded-md"
                />
              )}
            />
            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
          </Form.Item>
          

          <Form.Item>
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
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </Form.Item>

          <Form.Item>
            <Controller
              name="userName"
              control={control}
              rules={{ required: "Please input your userName" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="User name"
                  className="rounded-md"
                />
              )}
            />
            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
          </Form.Item>

          <Form.Item>
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
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              loading={isLoading}
              className="w-full bg-[#FFE8AC] hover:bg-white text-black rounded-md"
            >
              Continue
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            Already have an account?
            <Link to={"/login"} className="ml-2 text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
