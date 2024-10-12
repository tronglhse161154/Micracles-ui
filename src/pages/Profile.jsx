import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, Input, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateUser } from "../lib/redux/reducers/userSlice"; 
import { getUserById, updateUser } from "../lib/api/userService"; 

const UserProfile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState({});
  const User = useSelector((state) => state.users.currentUser);

  // Fetch user data
  const fetchUser = async () => {
    try {
      if (!User?.ID) {
        message.error("User ID is missing, cannot fetch user data!");
        return;
      }

      const userData = await getUserById(User.ID);
      setUser(userData);
      setEditingUser(userData);
      console.log("user data",userData);
    } catch (error) {
      message.error("Failed to fetch user data");
    }
  };

  useEffect(() => {
    if (User?.ID) {
      fetchUser();
    }
  }, [User]);

  const showEditModal = () => {
    setEditingUser(user || {}); // Check if user is null
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (!User?.ID) {
      message.error("User ID is missing!");
      return;
    }

    try {
      console.log("Updating user data: ", editingUser);

      const updatedData = await updateUser(User.ID, {
        id: User.ID,  // You might want to keep this if your API needs it
        userName: editingUser.userName,
        password: editingUser.password,
        fullName: String(editingUser.fullName),
        email: editingUser.email,
        phoneNumber: editingUser.phoneNumber,
        province: editingUser.province,
        district: editingUser.district,
        address: editingUser.address,
        status: String(editingUser.status),
        // Do not include status in the update payload
      });

      console.log("Updated Data Response: ", updatedData); // Log the API response
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
          <h2 className="text-xl font-semibold">{user?.fullName || "Unknown"}</h2>
          
          <Button
            icon={<EditOutlined />}
            onClick={showEditModal}
            className="mt-4"
          >
            Edit Profile
          </Button>
        </div>
      </Card>

      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* Removed the ID input field */}
        <Input
          placeholder="Full Name"
          value={editingUser?.fullName || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, fullName: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Password"
          value={editingUser?.password || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, password: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Email"
          value={editingUser?.email || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, email: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Phone Number"
          value={editingUser?.phoneNumber || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, phoneNumber: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Province"
          value={editingUser?.province || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, province: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="District"
          value={editingUser?.district || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, district: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Address"
          value={editingUser?.address || ""}
          onChange={(e) =>
            setEditingUser({ ...editingUser, address: e.target.value })
          }
          className="mb-2"
        />
        {/* Removed the Status input field */}
      </Modal>
    </div>
  );
};

export default UserProfile;
