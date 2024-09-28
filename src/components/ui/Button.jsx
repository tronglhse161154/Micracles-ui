const Button = ({ label, handleClick, containerStyles }) => {
  return (
    <div
      onClick={handleClick}
      className={`custom-btn ${containerStyles} disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {label}
    </div>
  );
};

export default Button;
