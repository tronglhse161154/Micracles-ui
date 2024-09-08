import { Image } from "antd";

const Logo = () => {
  return (
    <div onClick={""} style={{ cursor: "pointer" }}>
      <Image
        src="/public/img/Logo.png"
        alt="Logo"
        preview={false}
        width={150}
        height={150}
      />
    </div>
  );
};

export default Logo;
