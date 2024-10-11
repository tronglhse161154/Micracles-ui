import React, { useEffect, useState } from "react";
import { Table, Card, message, Button, Modal, Form, Input } from "antd";
import { getAllUser, updateUser } from "../../lib/api/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form] = Form.useForm();
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUser();
        setUsers(response.filter(user => user.role === 1)); // Filter users with role = 1
      } catch (error) {
        message.error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = (user) => {
    setSelectedUser(user);
    form.setFieldsValue(user); // Populate form with selected user data
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      // Convert status to string before updating
      const updatedValues = {
        ...values,
        status: String(values.status) // Convert status to string
      };

      setUpdating(true);
      await updateUser(selectedUser.id, updatedValues);
      message.success("User updated successfully!");
      setIsModalOpen(false);
      form.resetFields();
      setSelectedUser(null);
    } catch (error) {
      message.error("Failed to update user. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    form.resetFields();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",  // New field
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Province", // New field
      dataIndex: "province",
      key: "province",
    },
    {
      title: "District", // New field
      dataIndex: "district",
      key: "district",
    },
    {
      title: "Address", // New field
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleUpdate(record)}>Update</Button>
      ),
    },
  ];

  return (
    <Card title="User Management" bordered={false}>
      <Table dataSource={users} columns={columns} loading={loading} rowKey="id" />
      
      <Modal
        title="Update User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={updating ? "Updating..." : "Update"}
        cancelText="Cancel"
        confirmLoading={updating}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Username" name="userName" rules={[{ required: true, message: 'Please input the username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please input the full name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input the email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber"> {/* New field */}
            <Input />
          </Form.Item>
          <Form.Item label="Province" name="province"> {/* New field */}
            <Input />
          </Form.Item>
          <Form.Item label="District" name="district"> {/* New field */}
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address"> {/* New field */}
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="role"> {/* New field */}
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input the password!' }]}> {/* New field for password */}
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default Users;
