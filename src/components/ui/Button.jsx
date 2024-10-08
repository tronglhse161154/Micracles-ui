const Button = ({ label, onClick, containerStyles }) => {
  return (
    <div
      onClick={onClick}
      className={`custom-btn ${containerStyles} disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {label}
    </div>
  );
};

export default Button;
