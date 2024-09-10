const Button = ({ label, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full text-white cursor-pointer"
    >
      {label}
    </div>
  );
};

export default Button;
