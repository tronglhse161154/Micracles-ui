import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LoginIcon, SignupIcon, UserIcon } from "../../common/icons";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux";
import {
  clearCurrentUser,
  setCurrentUser,
} from "../../../lib/redux/reducers/userSlice";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { IoMdNotifications, IoIosSettings } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import toast from "react-hot-toast";

const UserMenu = ({ currentUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user is stored in sessionStorage and set it in Redux
    const user = sessionStorage.getItem("user");
    if (user) {
      dispatch(setCurrentUser(JSON.parse(user)));
    }
  }, [dispatch]);

  //LogOut

  const handleLogout = useCallback(() => {
    // Clear user from Redux store
    dispatch(clearCurrentUser());
    setIsOpen(false);
    toast.success("Logout Successful !");
    navigate("/");
  }, [dispatch, navigate]);

  const ToggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div
        onClick={ToggleOpen}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <UserIcon />
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[10vw] md:w-3/1 bg-yellow-50 overflow-hidden right-0 top-12 text-sm z-10">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              currentUser.Role === "Staff" ? (
                <>
                  <MenuItem
                    onClick={() => {}}
                    label="Dashboard"
                    icon={<MdDashboard size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="Notifications"
                    icon={<IoMdNotifications size={20} />}
                  />
                  <MenuItem
                    onClick={handleLogout}
                    label="Log out"
                    icon={<HiOutlineLogin size={20} />}
                  />
                </>
              ) : currentUser.Role === "Admin" ? (
                <>
                  <MenuItem
                    onClick={() => {}}
                    label="Dashboard"
                    icon={<MdDashboard size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="Manage All Users"
                    icon={<MdManageAccounts size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="Notifications"
                    icon={<IoMdNotifications size={20} />}
                  />
                  <MenuItem
                    onClick={handleLogout}
                    label="Log out"
                    icon={<HiOutlineLogin size={20} />}
                  />
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => {}}
                    label="My profile"
                    icon={<CgProfile size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="My history"
                    icon={<FaHistory size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="Notifications"
                    icon={<IoMdNotifications size={20} />}
                  />
                  <MenuItem
                    onClick={() => {}}
                    label="Settings"
                    icon={<IoIosSettings size={20} />}
                  />
                  <MenuItem
                    onClick={handleLogout}
                    label="Log out"
                    icon={<HiOutlineLogin size={20} />}
                  />
                </>
              )
            ) : (
              <>
                <MenuItem
                  onClick={() => navigate("/login")}
                  label="Login"
                  icon={<LoginIcon size={20} />}
                />
                <MenuItem
                  onClick={() => navigate("register")}
                  label="Signup"
                  icon={<SignupIcon size={20} />}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
