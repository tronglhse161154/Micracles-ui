import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, Input, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setUpdateUser } from "../lib/redux/reducers/userSlice"; // Import setUpdateUser
import { getUserById, updateUser } from "../lib/api/userService"; // Import updateUser function

const UserProfile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState({});
  const User = useSelector((state) => state.users.currentUser);
  
  console.log("Current User from Redux:", User); // Kiểm tra giá trị User

  const fetchUser = async () => {
    try {
      if (!User?.ID) {
        message.error("User ID is missing, cannot fetch user data!");
        return; // Trả về nếu không có ID
      }
  
      console.log("Fetching user with ID:", User?.ID); // Kiểm tra ID
      const userData = await getUserById(User.ID); // Sử dụng ID trực tiếp
      setUser(userData);
      setEditingUser(userData);
    } catch (error) {
      message.error("Failed to fetch user data");
    }
  };
  

  useEffect(() => {
    if (User?.ID) {
      fetchUser();
    } else {
      message.error("User ID is missing, cannot fetch user data!");
    }
  }, [User]);

  const showEditModal = () => {
    setEditingUser(user); // Load current information into the modal
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (!User?.ID) {
      message.error("User ID is missing!");
      return;
    }
  
    try {
      const updatedData = await updateUser(User.ID, {
        id: User.ID, // Đảm bảo gửi id trong payload
        userName: editingUser.userName,
        password: editingUser.password,
        fullName: editingUser.fullName,
        email: editingUser.email,
        phoneNumber: editingUser.phoneNumber,
        province: editingUser.province,
        district: editingUser.district,
        address: editingUser.address,
        status: editingUser.status,
      });
  
     
      dispatch(setUpdateUser(updatedData)); 
  
      await fetchUser(); 
  
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
          <Avatar
            size={100}
            src="https://via.placeholder.com/150"
            className="border-4 border-white"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">{user.profession}</p>
          <p className="text-gray-500">{user.email}</p>
          <Button
            icon={<EditOutlined />}
            onClick={showEditModal}
            className="mt-4"
          >
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="ID"
          value={editingUser.id} // Hiển thị đúng ID từ editingUser
          disabled // Đảm bảo trường ID không được phép chỉnh sửa
          className="mb-2"
        />
        <Input
          placeholder="Full Name"
          value={editingUser.fullName}
          onChange={(e) =>
            setEditingUser({ ...editingUser, fullName: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Password"
          value={editingUser.password}
          onChange={(e) =>
            setEditingUser({ ...editingUser, password: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Email"
          value={editingUser.email}
          onChange={(e) =>
            setEditingUser({ ...editingUser, email: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Phone Number"
          value={editingUser.phoneNumber}
          onChange={(e) =>
            setEditingUser({ ...editingUser, phoneNumber: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Province"
          value={editingUser.province}
          onChange={(e) =>
            setEditingUser({ ...editingUser, province: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="District"
          value={editingUser.district}
          onChange={(e) =>
            setEditingUser({ ...editingUser, district: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Address"
          value={editingUser.address}
          onChange={(e) =>
            setEditingUser({ ...editingUser, address: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Status"
          value={editingUser.status}
          onChange={(e) =>
            setEditingUser({ ...editingUser, status: e.target.value })
          }
          className="mb-2"
        />
      </Modal>
    </div>
  );
};

export default UserProfile;
