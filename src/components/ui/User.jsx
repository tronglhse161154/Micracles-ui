// Users.js
import React from "react";
import { Table, Card } from "antd";

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Admin',
  },
  {
    key: '2',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    role: 'User',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
];

const Users = () => {
  return (
    <Card title="User Management" bordered={false}>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default Users;
