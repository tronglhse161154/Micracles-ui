import React from "react";

const MenuItem = ({ onClick, label, icon }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-primary transition font-semibold flex flex-row items-center"
    >
      <p className="mr-3">{icon}</p>
      {label}
    </div>
  );
};

export default MenuItem;