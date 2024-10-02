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

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      province: "",
      district: "",
      address: "",
    },
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        await registerUser(
          data.email,
          data.password,
          data.fullName,
          data.phoneNumber,
          data.province,
          data.district,
          data.address
        );
        setIsLoading(false);
        toast.success("User registered successfully!");
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
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: "Please input your phone number!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<PhoneOutlined className="site-form-item-icon" rotate={100} />}
                  placeholder="Phone number"
                  type="tel"
                  className="rounded-md"
                />
              )}
            />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
          </Form.Item>

          <Form.Item>
            <Controller
              name="province"
              control={control}
              rules={{ required: "Tell us where you're from!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<HeatMapOutlined className="site-form-item-icon" />}
                  placeholder="Province"
                  className="rounded-md"
                />
              )}
            />
            {errors.province && <span className="text-red-500">{errors.province.message}</span>}
          </Form.Item>

          <Form.Item>
            <Controller
              name="district"
              control={control}
              rules={{ required: "Tell us where you're from!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<HeatMapOutlined className="site-form-item-icon" />}
                  placeholder="District"
                  className="rounded-md"
                />
              )}
            />
            {errors.district && <span className="text-red-500">{errors.district.message}</span>}
          </Form.Item>

          <Form.Item>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Tell us where you're from!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<HomeOutlined className="site-form-item-icon" />}
                  placeholder="Address"
                  className="rounded-md"
                />
              )}
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
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
