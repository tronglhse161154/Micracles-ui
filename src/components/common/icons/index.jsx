import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaRegistered } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiShieldCheck } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiExchangeBoxFill } from "react-icons/ri";

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
  return <FaRegistered size={25} />;
}

export function DeliveryIcon() {
  return <TbTruckDelivery size={40} />;
}

export function ShieldIcon() {
  return <HiShieldCheck size={40} />;
}

export function OperatorIcon() {
  return <MdOutlineSupportAgent size={40} />;
}

export function ExchangeIcon() {
  return <RiExchangeBoxFill size={40} />;
}

export function LeftVidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="248"
      height="136"
      fill="none"
    >
      <path
        fill="url(#medium-gold_svg__a)"
        d="M176.686 0H248v3h-71.314z"
      ></path>
      <path
        fill="url(#medium-gold_svg__b)"
        fillRule="evenodd"
        d="m31.879 15.5 17-15.5h127.807v3H50.121l-17 15.5H18v15.121l-15 17V136H0V49.379l15-17V28H0V0h28v15.5zM15 15.5V25H3V3h22v12.5zm37.5-9h-.198l-.144.136L35.802 22H21.5v13.816L7.12 52.676l-.12.14V136h1V53.184l14.38-16.86.12-.14V23h13.698l.144-.136L52.698 7.5H80v-1z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="medium-gold_svg__a"
          x1="176.707"
          x2="248.033"
          y1="2.011"
          y2="2.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD789"></stop>
          <stop offset="1" stop-color="#FFD789" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="medium-gold_svg__b"
          x1="88.343"
          x2="88.343"
          y1="0"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD789"></stop>
          <stop offset="0.5" stopColor="#AD7C3F"></stop>
          <stop offset="1" stopColor="#A97948" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RightVidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="248"
      height="136"
      fill="none"
    >
      <path
        fill="url(#medium-gold_svg__a)"
        d="M176.686 0H248v3h-71.314z"
      ></path>
      <path
        fill="url(#medium-gold_svg__b)"
        fillRule="evenodd"
        d="m31.879 15.5 17-15.5h127.807v3H50.121l-17 15.5H18v15.121l-15 17V136H0V49.379l15-17V28H0V0h28v15.5zM15 15.5V25H3V3h22v12.5zm37.5-9h-.198l-.144.136L35.802 22H21.5v13.816L7.12 52.676l-.12.14V136h1V53.184l14.38-16.86.12-.14V23h13.698l.144-.136L52.698 7.5H80v-1z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="medium-gold_svg__a"
          x1="176.707"
          x2="248.033"
          y1="2.011"
          y2="2.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD789"></stop>
          <stop offset="1" stopColor="#FFD789" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="medium-gold_svg__b"
          x1="88.343"
          x2="88.343"
          y1="0"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD789"></stop>
          <stop offset="0.5" stopColor="#AD7C3F"></stop>
          <stop offset="1" stopColor="#A97948" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LeftArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      ></path>
    </svg>
  );
}

export function UploadIcon() {
  return (
    <svg
      className="text-indigo-500 w-24 mx-auto mb-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  );
}
