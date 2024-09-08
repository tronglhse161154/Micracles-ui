import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaRegistered } from "react-icons/fa";

export function SearchIcon() {
  return <IoSearchOutline size={25} />;
}

export function CartIcon() {
  return <HiOutlineShoppingBag size={25} />;
}

export function UserIcon() {
  return <FaUserCircle size={25} />;
}

export function BellIcon() {
  return <FaRegBell size={25} />;
}

export function LoginIcon() {
  return <MdLogin size={25} />;
}

export function SignupIcon() {
  return <FaRegistered size={25} />
}
