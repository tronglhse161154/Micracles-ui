import React, { useEffect, useState } from 'react';
import { Card, Avatar, Button, Input, Modal, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from "../lib/redux/reducers/userSlice"
import { getUserById} from '../lib/api/userService'; // Import hàm từ userService
import { useParams } from 'react-router-dom'; // Import useParams

const UserProfile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState({});
  const User = useSelector(state => state.users.currentUser);
  console.log("user", User);

  const fetchUser = async () => {
    try {
      const userData = await getUserById(User?.ID);
      setUser(userData);
      setEditingUser(userData); // Cập nhật thông tin khi tải
    } catch (error) {
      message.error("Failed to fetch user data");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const showEditModal = () => {
    setEditingUser(user); // Load thông tin hiện tại vào modal
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const updatedData = await updateUser(userId, editingUser); // Gọi hàm cập nhật thông tin
      setUser(updatedData); // Cập nhật thông tin người dùng
      dispatch(setCurrentUser(updatedData)); // Lưu thông tin người dùng vào Redux store
      message.success("Profile updated successfully!");
      setIsModalVisible(false);
    } catch (error) {
      message.error("Failed to update profile!");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <Card
        className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
        cover={
          <div className="bg-gradient-to-r from-green-400 to-blue-500 h-32"></div>
        }
      >
        <div className="relative -mt-16 flex justify-center">
          <Avatar size={100} src="https://via.placeholder.com/150" className="border-4 border-white" />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.profession}</p>
          <p className="text-gray-500">{user.email}</p>
          <Button icon={<EditOutlined />} onClick={showEditModal} className="mt-4">
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Modal chỉnh sửa thông tin */}
      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Name"
          value={editingUser.name}
          onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
          className="mb-2"
        />
        <Input
          placeholder="Email"
          value={editingUser.email}
          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          className="mb-2"
        />
        <Input
          placeholder="Profession"
          value={editingUser.profession}
          onChange={(e) => setEditingUser({ ...editingUser, profession: e.target.value })}
        />
      </Modal>
    </div>
  );
};

export default UserProfile;
